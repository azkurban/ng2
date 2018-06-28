import { merge as mergeFactory } from '../services/merge';
import { compile } from '../services/path';
import { getType } from '../services/convert';
import { TextColumnModel } from '../column-type/text.column';
import { startCase, assignWith, noop, isUndefined } from '../utility/kit';
import { columnFactory } from '../column/column.factory';
import { AppError } from '../infrastructure/error';

function merge(left, right, force = false) {
	let canAssign;
	if (force) {
		canAssign = (source, target) => !isUndefined(target) && target !== null ? target : source;
	}
	else {
		canAssign = (source, target) => !isUndefined(target) && target !== null && source === null ? target : source;
	}

	const doMerge = mergeFactory({
		equals: (l, r) => l.key === r.key,
		update: (l, r) => assignWith(l, r, canAssign),
		insert: (r, left) => left.push(r),
		remove: noop
	});

	return doMerge(left, right);
}

function hasChanges(statistics) {
	return statistics.some(st => st.inserted || st.update);
}

export function generateFactory(model) {
	const data = model.data;
	const createColumn = columnFactory(model);
	return () => {
		const { rows } = data();
		const htmlColumns = model.columnList().columns;

		const spawnColumns = [];
		const { generation } = model.columnList();
		if (generation) {
			let settings = {
				rows,
				columnFactory: createColumn,
				deep: false,
				cohort: false
			};

			switch (generation) {
				case 'shallow': {
					break;
				}
				case 'deep': {
					settings.deep = true;
					break;
				}
				case 'cohort': {
					settings.deep = true;
					settings.cohort = true;
					break;
				}
				default:
					throw new AppError(
						'column.list.generate',
						`Invalid generation mode "${generation}"`
					);
			}

			spawnColumns.push(...generate(settings));
		}

		const columns = Array.from(data().columns);

		const statistics = [];
		if (spawnColumns.length) {
			statistics.push(merge(columns, spawnColumns, false));
		}

		if (htmlColumns.length) {
			statistics.push(merge(columns, htmlColumns, true));
		}

		return {
			columns,
			statistics,
			hasChanges: hasChanges(statistics)
		};
	};
}

export function generate(settings) {
	const context = assignWith({
		deep: true,
		cohort: false,
		rows: [],
		columnFactory: () => new TextColumnModel(),
		title: startCase
	}, settings);

	if (context.rows.length) {
		return build(
			context.rows[0],
			null,
			context.columnFactory,
			context.deep,
			context.cohort,
			context.title
		);
	}

	return [];
}

function build(graph, path, columnFactory, deep, cohort, title) {
	const props = Object.getOwnPropertyNames(graph);
	return props.reduce((memo, prop) => {
		const propPath = path ? `${path}.${prop}` : prop;

		const value = graph[prop];
		const type = getType(value);
		switch (type) {
			case 'array': {
				const column = columnFactory(type).model;
				column.key = propPath;
				column.title = title(propPath, graph, column.length);
				column.path = propPath;
				column.value = compile(propPath);
				column.source = 'generation';
				if (value.length) {
					column.itemType = getType(value[0]);
					switch (column.itemType) {
						case 'date': {
							column.itemFormat = columnFactory('date').model.format;
							break;
						}
					}
				}

				memo.push(column);
				break;
			}
			case 'collection': {
				break;
			}
			case 'object': {
				if (deep) {
					const columns = build(
						value,
						propPath,
						columnFactory,
						deep,
						cohort,
						title
					);

					if (cohort) {
						const column = columnFactory('cohort').model;
						column.key = propPath;
						column.title = title(propPath, graph, column.length);
						column.path = propPath;
						column.value = compile(propPath);
						column.source = 'generation';
						column.children.push(...columns);
						memo.push(column);
					} else {
						memo.push(...columns);
					}

				}
				break;
			}
			default: {
				const column = columnFactory(type).model;
				column.key = propPath;
				column.title = title(propPath, graph, column.length);
				column.path = propPath;
				column.value = compile(propPath);
				column.source = 'generation';
				memo.push(column);
				break;
			}
		}

		return memo;
	}, []);
}