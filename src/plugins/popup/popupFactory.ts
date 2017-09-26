import {
	Injectable,
	Component,
	ComponentFactoryResolver,
	ComponentRef,
	ElementRef,
	ViewContainerRef
} from '@angular/core';

import {ColumnChooserComponent} from '../colum-chooser/column-chooser.component';
import {AppError} from 'ng2-qgrid/core/infrastructure/error';

@Injectable()
export class PopupFactory {

	constructor(private viewContainerRef: ViewContainerRef,
					private componentFactoryResolver: ComponentFactoryResolver) {
	}

	getPopup(id: string): ComponentRef<any> {
		switch (id) {
			case 'column-chooser':
				return this.resolve(ColumnChooserComponent);
			default:
				throw new AppError('popupFactory', `id value is not supported: '${id}'`);
		}
	}

	private resolve(component: any): ComponentRef<any> {
		const popup = this.componentFactoryResolver.resolveComponentFactory(component);
		return this.viewContainerRef.createComponent(popup) as ComponentRef<any>;
	}
}
