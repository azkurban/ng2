import { Command } from '../command/command';
import { commandKey } from '../command/command.key';
import { noop } from '../utility/kit';

export const SELECTION_SET_COMMAND_KEY = commandKey('selection.set.command');

export class SelectionSetCommand extends Command {
    constructor(plugin) {
        const { model, view } = plugin;

        super({
            key: SELECTION_SET_COMMAND_KEY,
            execute: ([data, state]) => {
                const selectionLet = view.selection;
                const { toggle } = model.selection();
                const clientContext = {
                    items: data,
                    kind: 'set'
                };

                if (toggle.canExecute(clientContext) === true) {
                    if (toggle.execute(clientContext) !== false) {
                        selectionLet.form.select(data, state);

                        return () => {
                            const items = selectionLet
                                .selectionService
                                .map(
                                    selectionLet
                                        .form
                                        .entries()
                                );

                            model.selection({
                                items
                            }, {
                                source: 'selection.set.command'
                            });
                        };
                    }
                }

                return noop;
            }
        });
    }
}