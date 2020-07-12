import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild } from '@angular/core';
import { DataService, Human } from '../data.service';
import { Observable } from 'rxjs';
import { GridComponent } from '@qgrid/ngx';

const EXAMPLE_TAGS = [
	'edit-cell-basic',
	'Cell values can be edited'
];

@Component({
	selector: 'example-edit-cell-basic',
	templateUrl: 'example-edit-cell-basic.component.html',
	styleUrls: ['example-edit-cell-basic.component.scss'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleEditCellBasicComponent implements AfterViewInit {
	@ViewChild(GridComponent) myGrid: GridComponent;

	static tags = EXAMPLE_TAGS;
	title = EXAMPLE_TAGS[1];

	rows: Observable<Human[]>;

	constructor(dataService: DataService) {
		this.rows = dataService.getPeople();
	}

	ngAfterViewInit(): void {
		const { model } = this.myGrid;

		model.edit({
			mode: 'cell'
		});
	}
}
