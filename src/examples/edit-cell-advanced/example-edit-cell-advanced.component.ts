import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { DataService, Human } from '../data.service';
import { Observable } from 'rxjs';
import { GridComponent, Command } from 'ng2-qgrid';

const EXAMPLE_TAGS = [
	'edit-cell-advanced',
	'Edit mode controled dynamically by code.'
];

@Component({
	selector: 'example-edit-cell-advanced',
	templateUrl: 'example-edit-cell-advanced.component.html',
	styleUrls: ['example-edit-cell-advanced.component.scss'],
	providers: [DataService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleEditCellAdvancedComponent implements AfterViewInit {
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
