import {NgModule} from '@angular/core';
import {MainModule} from './main';
import {ThemeService as Theme} from './themes/material/theme.service';
import {ThemeService, TemplateLinkService, TemplateModule} from './template';
import {TemplateCacheDirective} from './template/template-cache.directive';
import {Model} from 'ng2-qgrid/core/infrastructure';
import {setup} from 'ng2-qgrid/core/index';
import {GridService} from './main/grid/grid.service';
import {GridComponent} from './main/grid/grid.component';
import {ColumnListComponent, ColumnComponent} from './main/column';

import {ColumnChooserModel} from 'ng2-qgrid/plugins';
import {PopupModel} from 'ng2-qgrid/plugins';
// import {PopupTriggerComponent} from 'ng2-qgrid/plugins';
// import {PopupModule} from 'ng2-qgrid/plugins';
// import {PluginModule} from 'ng2-qgrid/plugins';

@NgModule({
	declarations: [],
	exports: [
		GridComponent,
		ColumnListComponent,
		ColumnComponent,
		TemplateCacheDirective,
		MainModule,
		TemplateModule,
		// PluginModule,
		// PopupModule,
		// PopupTriggerComponent
	],
	imports: [
		MainModule,
		TemplateModule,
		// PluginModule,
		// PopupModule,
	],
	providers: [
		GridService,
		TemplateLinkService,
		ThemeService
	]
})
export class GridModule {
	constructor(themeService: ThemeService, theme: Theme) {
		let model = setup(Model);
		this.setupPlugins(model);
		themeService.name = theme.name;
	}

	private setupPlugins(model: any) {
		model
			.register('columnChooser', ColumnChooserModel)
			// .register('columnFilter', ColumnFilterModel)
			.register('popup', PopupModel);
	}
}
