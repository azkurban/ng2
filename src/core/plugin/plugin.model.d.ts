import { Resource } from '../resource/resource';

export declare interface PluginModel {
	resource?: Resource;

	imports?: { [key: string]: any };
}
