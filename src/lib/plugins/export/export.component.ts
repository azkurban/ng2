import { AfterViewInit, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { PluginService } from '../plugin.service';
import { ColumnModel } from 'ng2-qgrid/core/column-type/column.model';
import { Command } from 'ng2-qgrid/core/command/command';
import { ExportView } from 'ng2-qgrid/plugin/export/export.view';
import { Xlsx } from 'ng2-qgrid/plugin/export/xlsx';
import { Pdf } from 'ng2-qgrid/plugin/export/pdf';
import { downloadFactory } from 'ng2-qgrid/plugin/export/download';
import { Action } from 'ng2-qgrid/core/action/action';
import { Composite } from 'ng2-qgrid/core/infrastructure/composite';
import { TemplateHostService } from '../../template/template-host.service';

@Component({
	selector: 'q-grid-export',
	templateUrl: './export.component.html',
	providers: [ TemplateHostService, PluginService ]
})
export class ExportComponent implements AfterViewInit {
	@Input() type: string;
	@ContentChild(TemplateRef) templateRef: TemplateRef<any>;

	context: { $implicit: ExportComponent } = {
		$implicit: this
	};

	constructor(private plugin: PluginService, private templateHost: TemplateHostService) {
		this.templateHost.key = () => `export-${this.type}`;
	}

	ngAfterViewInit() {
		const { model } = this.plugin;
		const exportView = new ExportView(model, { type: this.type });
		const action = new Action(
			new Command({ execute: () => exportView[ this.type ].execute() }),
			`Export to ${this.type}`,
			'file_download'
		);

		if (this.templateRef) {
			action.templateUrl = this.templateHost.key('trigger');
		}

		model.action({
			items: Composite.list([ model.action().items, [ action ] ])
		}, {
			source: 'export.component'
		});
	}

	get rows() {
		return this.plugin.model.data().rows;
	}

	get columns() {
		return this.plugin.model.columnList().line;
	}

	get id() {
		return this.plugin.model.grid().id;
	}
}

