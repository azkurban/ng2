import {Resource} from 'ng2-qgrid/core/resource/resource';
export class PluginModel {
	resource: Resource;
	imports: any;

	constructor() {
		this.resource = new Resource();
		this.imports = {};
	}
}
