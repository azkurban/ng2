import {
	Component,
	ViewContainerRef,
	ComponentFactoryResolver,
	ComponentRef,
	Renderer2,
	ElementRef,
	ViewChild,
} from '@angular/core';

import {PopupService} from './popup.service';

@Component(
	{
		selector: 'popup-demo',
		template: `
			<div><h3>Popup Demo</h3>
				<p>Drag me away from the center and click on <b>Another popup</b> 
					button to see another of me stack up on top of me.</p>
				<input type="button" value="Another popup" (click)="popup()" /></div>
		`,
		styleUrls: [],
		providers: []
	}
)
export class PopupDemoComponent {
	private popupService: PopupService;

	constructor(viewContainerRef: ViewContainerRef,
					componentFactoryResolver: ComponentFactoryResolver,
					private renderer: Renderer2,
					private elementRef: ElementRef) {

		this.popupService = new PopupService(viewContainerRef, componentFactoryResolver, renderer, this.elementRef);
	}

	popup = () => {
		this.popupService.popupComponent(PopupDemoComponent);
	}
}
