import { map as getColumnMap } from '../column/column.service';
import { nodeBuilder } from '../node/node.build';
import { Guard } from '../infrastructure/guard';

export function groupPipe(memo, context, next) {
	Guard.hasProperty(memo, 'rows');

	const { model } = context;
	if (memo.rows.length) {
		const { rows, columns } = model.data();
		const { by } = model.group();
		const columnMap = getColumnMap(columns);
		const build = nodeBuilder(columnMap, by, context.valueFactory);

		const memoRows = memo.rows;
		memo.nodes = build(memoRows, i => {
			const row = memoRows[i];
			const index = rows.indexOf(row);
			return index < 0 ? i : index;
		});
	}

	next(memo);
}