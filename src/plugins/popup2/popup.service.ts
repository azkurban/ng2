import {
	ViewContainerRef,
	ComponentFactoryResolver,
	ComponentRef,
	Renderer2,
	ElementRef
} from '@angular/core';

import {PopupComponent} from './popup';
import {DomService} from 'ng2-qgrid/common/dom/dom.service';

export class PopupInfo {
	popup: ComponentRef<any>;
	modal: HTMLElement;
	wrapper: HTMLElement;
	contrlPanel: HTMLElement;
	popupContent: HTMLElement;
	dragXOffset: number = 0;
	dragYOffset: number = 0;

	constructor() {
	}

}

export class PopupService {
	private bodyHtml: HTMLElement;
	private domService: DomService;

	modalZIndex: number = 10000;
	popupQueue: PopupInfo[] = [];

	constructor(private viewContainerRef: ViewContainerRef,
					private componentFactoryResolver: ComponentFactoryResolver,
					private renderer: Renderer2,
					private elementRef: ElementRef) {
		this.domService = new DomService(renderer, elementRef);
	}

	popupComponent = (component: any): ComponentRef<any> => {

		let pInfo: PopupInfo = new PopupInfo();
		const popupFactory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
		const popupRef = this.viewContainerRef.createComponent(popupFactory);

		if (this.bodyHtml == null) {
			this.bodyHtml = this.getBody(popupRef.location.nativeElement);
		}

		pInfo.popup = popupRef;
		this.findPopupWrapperAndContent(pInfo.popup.location.nativeElement, pInfo);
		// Move the wrapper to the body tag
		this.domService.removeElement(pInfo.popup.location.nativeElement);

		this.bodyHtml.appendChild(pInfo.popup.location.nativeElement);

		const popup = this.componentFactoryResolver.resolveComponentFactory(component);
		let ComponentRef = this.viewContainerRef.createComponent(popup) as ComponentRef<any>;

		this.domService.removeElement(ComponentRef.location.nativeElement);

		pInfo.popupContent.appendChild(ComponentRef.location.nativeElement);
		this.popupQueue.push(pInfo);
		this.centerPositioning(pInfo.wrapper);
		return popupRef;
	}
	public close = () => {
		if (this.popupQueue.length > 0) {
			let popup = this.popupQueue.pop();
			this.domService.removeElement(popup.popup.location.nativeElement);
		}
	}

	public StartDragAt = (startX: number, startY: number) => {
		let popup = this.popupQueue[this.popupQueue.length - 1];

		let top: number = +popup.wrapper.style.top.replace('px', '');
		let left: number = +popup.wrapper.style.left.replace('px', '');
		popup.dragYOffset = startY - top;
		popup.dragXOffset = startX - left;
	}
	public moveTo = (x: number, y: number) => {
		let popup = this.popupQueue[this.popupQueue.length - 1];

		popup.wrapper.style.top = (y - popup.dragYOffset) + 'px';
		popup.wrapper.style.left = (x - popup.dragXOffset) + 'px';
	}
	private findPopupWrapperAndContent = (popup: HTMLElement, popupInfo: PopupInfo) => {
		let children = Array.from(popup.children);

		for (let child  of children) {
			// let c = popup.children[i] as HTMLElement;
			let c = child as HTMLElement;

			if (c != null) {
				switch (c.className) {
					case 'popup-modal':
						popupInfo.modal = c;
						break;
					case 'popup-wrapper':
						popupInfo.wrapper = c;
						break;
					case 'popup-controlPanel':
						popupInfo.contrlPanel = c;
						break;
					case 'popup-content':
						popupInfo.popupContent = c;
						break;
					default:
				}
				this.findPopupWrapperAndContent(c, popupInfo);
			}
		}

	}
	private centerPositioning = (wrapper: HTMLElement): HTMLElement => {

		if (wrapper != null) {
			let modal: HTMLElement = wrapper.parentElement;
			let left: number = ((modal.clientWidth - wrapper.clientWidth) / 2); // | 0;
			let top: number = ((modal.clientHeight - wrapper.clientHeight) / 2); // | 0;

			left = left > 0 ? left : 0;
			top = top > 0 ? top : 0;

			wrapper.style.top = top + 'px';
			wrapper.style.left = left + 'px';
			let y = wrapper.clientTop;
			let x = wrapper.clientTop;

		}
		return wrapper;
	}
	private getBody = (fromEl: HTMLElement): HTMLElement => {
		let b: HTMLElement = fromEl;
		do {
			b = b.parentElement;
		} while (b.tagName !== 'BODY');
		return b;

	}
}
