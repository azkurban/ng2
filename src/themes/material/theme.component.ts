import {Component} from '@angular/core';
import {template} from './templates';
import {ChipListComponent} from './components/chip-list/chip-list.component';
import {ColumnChooserComponent} from 'ng2-qgrid/plugins/colum-chooser';
import {PopupComponent,
	PopupTriggerComponent,
	PopupPanelComponent,
	PopupHeadComponent,
	PopupBodyComponent} from 'ng2-qgrid/plugins/popup';

// Do not delete this code
// its required for template recompilation on changes
const debug = false;
if (debug) {
	console.log(template);
}

@Component({
	selector: 'q-grid-theme',
	templateUrl: './theme.component.gen.html'
})
export class ThemeComponent {
	constructor() {
	}
}
