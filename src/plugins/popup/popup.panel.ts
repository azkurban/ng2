// import {TemplateLink} from 'ng2-qgrid/view/components/template/template.link';
import {PopupService} from 'ng2-qgrid/plugins/popup/popup.service';
import {Component, ElementRef, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {TemplateCacheService, TemplateLinkService} from 'ng2-qgrid/template';

@Component({
	selector: 'q-grid-popup-panel',
	templateUrl: './popup.panel.html'
})

export class PopupPanelComponent implements OnInit, OnDestroy {
	@Input() model;
	@Input() id;

	constructor(private popupService: PopupService,
					private element: ElementRef,
					private viewContainerRef: ViewContainerRef,
					private templateLink: TemplateLinkService,
					private templateCache: TemplateCacheService) {
	}

	ngOnInit(): void {
		const model = this.model;
		const templateUrl = 'qgrid.plugin.popup-panel.tpl.html';
		const template =
			this.templateCache.get(templateUrl) ||
			this.templateLink.get(templateUrl);

		this.viewContainerRef.createEmbeddedView(template, this);
		// const templateScope = this.$scope.$new();
		// const link = this.template.link(
		//   templateUrl,
		//   model.popup().resource
		// );

		this.element.nativeElement.classList.add('q-grid-popup');
	}

	ngOnDestroy() {
		this.close();
	}

	close(): void {
		this.popupService.close(this.id);
	}
}
