import {
	Component,
	ViewContainerRef,
	ComponentFactoryResolver,
	ComponentRef,
	Renderer2,
	ElementRef,
	ViewChild,
} from '@angular/core';
import {PopupDemoComponent} from './popupdemo';
import {PopupComponent} from './popup';
import {PopupInfo, PopupService} from './popup.service';

@Component({
	selector: 'web-app',
	template: `
		<div #popupRoot></div>
		<div>
			<h3>Popup Demo</h3> 
			<input type="button" value="Click to Popup" (click)="popup()">
		</div>
	`
})
export class Popup2AppComponent {
	title: string = 'Angular 2 Template';
	@ViewChild('popupRoot', {read: ViewContainerRef})
	parent: ViewContainerRef;

	private popupService: PopupService;

	constructor(viewContainerRef: ViewContainerRef,
					componentFactoryResolver: ComponentFactoryResolver,
					private renderer: Renderer2,
					private elementRef: ElementRef) {

		this.popupService = new PopupService(viewContainerRef, componentFactoryResolver, renderer, this.elementRef);
	}

	public popup = () => {
		let popup = this.popupService.popupComponent(PopupDemoComponent);
	}
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
