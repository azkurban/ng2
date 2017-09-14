import {Command} from './command';

export declare class CommandManager {
	constructor(apply?: Function);

	invoke(commands: Command[]): boolean;
	filter(commands: Command[]): Command[];
}
