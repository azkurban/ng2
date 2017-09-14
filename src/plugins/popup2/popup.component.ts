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

@Component({
	selector: 'q-grid-popup2',
	templateUrl: './popup.tpl.html',
})
export class PopupComponent {
	private popupService: PopupService;

	constructor(viewContainerRef: ViewContainerRef,
					componentFactoryResolver: ComponentFactoryResolver,
					private renderer: Renderer2,
					private elementRef: ElementRef) {

		this.popupService = new PopupService(viewContainerRef, componentFactoryResolver, renderer, this.elementRef);
	}

	closePopup(): void {
		this.popupService.close();
	}

	mousedown(e: MouseEvent) {
		this.popupService.StartDragAt(e.x, e.y);
	}

	dragging(e: DragEvent): void {
		e.preventDefault();
		if (e.x > 0 && e.y > 0) {
			this.popupService.moveTo(e.clientX, e.clientY);
		}
	}
}
