import {CommandManager} from 'ng2-qgrid/core/command/command.manager';

export class PopupCommandManager extends CommandManager {
	constructor(apply: Function, private popup: any) {
		super(apply);

	}

	filter(commands) {
		if (this.popup.isFocused) {
			return super.filter(commands);
		}

		return [];
	}
}
