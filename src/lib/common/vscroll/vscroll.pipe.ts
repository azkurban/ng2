import { Pipe, PipeTransform } from '@angular/core';
import { Guard } from 'ng2-qgrid/core/infrastructure/guard';
import { VscrollContext } from './vscroll.context';

const EMPTY_ITEMS = [];

@Pipe({
	name: 'qGridVscroll'
})
export class VscrollPipe implements PipeTransform {
	transform(data: any[], context: VscrollContext): any[] {
		Guard.notNull(context, 'context');

		if (!data) {
			return EMPTY_ITEMS;
		}

		const count = data.length;
		const { container, settings } = context;

		container.update(count);
		if (count) {
			const { items, cursor } = container;
			const { threshold } = settings;

			// We need to have a less number of virtual items on
			// the bottom, as deferred loading is happen there should
			// be a threshold place to draw several items below.
			const first = cursor;
			if (container.force || first !== container.position) {
				const last = Math.min(cursor + threshold, count);
				container.position = first;
				items.length = last - first;
				for (let i = first, j = 0; i < last; i++ , j++) {
					items[j] = data[i];
				}

				container.force = false;
			}

			return items;
		}

		return EMPTY_ITEMS;
	}
}
