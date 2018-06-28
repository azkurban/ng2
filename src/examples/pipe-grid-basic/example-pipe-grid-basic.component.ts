import { Component, OnInit, NgZone } from '@angular/core';
import { DataService, Human } from '../data.service';
import { Observable } from 'rxjs';
import { GridModel, Grid, PipeContext } from 'ng2-qgrid';

@Component({
	selector: 'example-pipe-grid-basic',
	templateUrl: 'example-pipe-grid-basic.component.html',
	styleUrls: ['example-pipe-grid-basic.component.scss'],
	providers: [DataService]
})
export class ExamplePipeGridBasicComponent {
	gridModel: GridModel;

	constructor(dataService: DataService, qgrid: Grid, zone: NgZone) {
		this.gridModel = qgrid.model();

		const myDataPipe =
			(rows: any[], context: PipeContext, next: (data: any[]) => void) => {
				zone.runOutsideAngular(() =>
					setTimeout(() =>
						dataService
							.getAtoms()
							.subscribe(next)
						, 1000)
				);
			};

		this.gridModel.data({
			pipe: [myDataPipe].concat(qgrid.pipeUnit.view)
		})
	}
}