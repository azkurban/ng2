import { Component, ChangeDetectionStrategy } from '@angular/core';

const EXAMPLE_TAGS = [
	'column-array-basic',
	'Cells can contain arrays of data'
];

@Component({
	selector: 'example-column-array-basic',
	templateUrl: 'example-column-array-basic.component.html',
	styleUrls: ['example-column-array-basic.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleColumnArrayBasicComponent {
	static tags = EXAMPLE_TAGS;
	title = EXAMPLE_TAGS[1];

	rows = [
		{
			'strings': ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
			'numbers': [Number.MIN_SAFE_INTEGER, 1, Math.PI, 5, 7, 11, 13, 17, 19, 23, Number.MAX_VALUE],
			'booleans': [true, false, true],
			'nulls': [null, undefined, ''],
			'dates': [new Date(2018, 1, 12), new Date(2018, 2, 13)],
			'customTemplate': ['Lorem', 'ipsum', 'dolor', 'sit', 'amet']
		}
	];
}
