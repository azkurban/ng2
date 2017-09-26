import {NgModule} from '@angular/core';
import {PagerModule} from './pagination';
import {ProgressModule} from './progress';
import {PopupModule} from './popup';
import {ColumnChooserModule} from './colum-chooser';
// import {SortBarModule} from 'ng2-qgrid/plugins/sort-bar';
// import {ExportModule} from './export';

@NgModule({
	declarations: [],
	exports: [
		PagerModule,
		ProgressModule,
		PopupModule,
		ColumnChooserModule
		// SortBarModule
		// ExportModule
	],
	imports: [
		PagerModule,
		ProgressModule,
		PopupModule,
		ColumnChooserModule
		// SortBarModule
	],
	providers: []
})
export class PluginModule {
}
