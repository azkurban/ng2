import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ThemeService} from './theme.service';
import {ThemeComponent} from './theme.component';
import {PluginModule} from 'ng2-qgrid/plugins';
import {TemplateModule} from 'ng2-qgrid/template';
import {CommonModule} from 'ng2-qgrid/common';
import {
	MdCardModule,
	MdIconModule,
	MdButtonModule,
	MdCheckboxModule,
	MdSelectModule,
	MdTooltipModule,
	MdProgressBarModule,
	MdInputModule,
	MdDatepickerModule,
	MdNativeDateModule,
	MdChipsModule,
	MdMenuModule,
	MdDialogModule
} from '@angular/material';

@NgModule({
	declarations: [
		ThemeComponent
	],
	exports: [
		ThemeComponent,
		PluginModule
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		TemplateModule,
		PluginModule,
		MdIconModule,
		MdButtonModule,
		MdCheckboxModule,
		MdSelectModule,
		MdTooltipModule,
		MdProgressBarModule,
		MdInputModule,
		MdDatepickerModule,
		MdNativeDateModule,
		MdChipsModule,
		MdDialogModule,
		MdMenuModule,
		MdCardModule
	],
	providers: [
		ThemeService
	]
})
export class ThemeModule {
	constructor() {
	}
}
