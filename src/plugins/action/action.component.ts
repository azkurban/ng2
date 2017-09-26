import {Component, Optional, OnInit, OnDestroy} from '@angular/core';
import {Command} from 'ng2-qgrid/core/command';
import {PluginComponent} from '../plugin.component';
import {RootService} from 'ng2-qgrid/infrastructure/component';

@Component({
	selector: 'q-grid-action',
	templateUrl: './progress.component.html'
})
export class ActionComponent extends PluginComponent implements OnInit, OnDestroy {
	constructor(@Optional() root: RootService) {
		super(root);

		this.models = ['action'];
	}

	ngOnInit() {

	}

	ngOnDestroy() {

	}

}
