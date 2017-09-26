import {Component, Input, OnInit, OnDestroy, ViewContainerRef, ElementRef} from '@angular/core';
import {POPUP_NAME} from 'ng2-qgrid/core/definition';
import {PopupService, IPopupSettings, PopupSettings} from 'ng2-qgrid/plugins/popup/popup.service';
import {TemplateCacheService, TemplateHostService, TemplateLinkService} from 'ng2-qgrid/template';
import {PopupComponent} from './popup.component';

@Component({
	selector: 'q-grid-popup-trigger',
	template: `
		<ng-content></ng-content>
	`,
	// templateUrl: './popup.trigger.tpl.html',
	providers: [TemplateHostService, PopupService],
})
export class PopupTriggerComponent implements OnInit {

	constructor(private service: PopupService,
					private viewContainerRef: ViewContainerRef,
					private templateLink: TemplateLinkService,
					private templateHost: TemplateHostService,
					private templateCache: TemplateCacheService,
					private element: ElementRef,
	) {
		// templateHost.key = this.key;
	}

	@Input('popup-id') popupId: string;

	private get hostKey() {
		return `${this.popupId}-popup.tpl`;
	}
	// @Input() popup: PopupComponent;

	ngOnInit(): void {
		// const model = this.popup.model;
		// const templateUrl = './popup.trigger.tpl.html';
/*
		const template =
			this.templateCache.get(templateUrl) ||
			this.templateLink.get(templateUrl);
*/

		// this.viewContainerRef.createEmbeddedView(template, this);
		// const templateScope = this.$scope.$new();
		// const link = this.template.link(
		// 	templateUrl,
		// 	model.popup().resource,
		// 	[`${this.popup.id}:trigger`]
		// );
		//
		// link(this.$element, templateScope);
		// this.$templateScope = templateScope;
	}

	open(settings: IPopupSettings = PopupSettings): void {
		if (!settings.target) {
			// settings.target = this.element.nativeElement[0];
		}

		// this.popup.open(settings);
	}
}
