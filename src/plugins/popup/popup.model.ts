import {Resource} from 'ng2-qgrid/core/resource/resource';
export class PopupModel {
	resource: Resource;
	items: Set<any>;
	constructor() {
		this.resource = new Resource();
		this.items = new Set();
	}
}
