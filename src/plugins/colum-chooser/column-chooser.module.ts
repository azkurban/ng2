import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {TemplateModule} from 'ng2-qgrid/template';
import {ColumnChooserComponent} from './column-chooser.component';
// import {ColumnChooserModel} from './column-chooser.model';

import {
	MdIconModule,
	MdButtonModule,
	MdCheckboxModule,
	MdSelectModule,
	MdTooltipModule,
	MdProgressBarModule,
	MdInputModule,
	MdDatepickerModule,
	MdNativeDateModule,
	MdChipsModule
} from '@angular/material';

@NgModule({
	imports: [BrowserModule, FormsModule, TemplateModule, MdCheckboxModule, MdSelectModule],
	exports: [ColumnChooserComponent],
	declarations: [ColumnChooserComponent],
	providers: [],
})
export class ColumnChooserModule {
}
