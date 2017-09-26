import {
	Component, Optional, Input, Output, OnDestroy, OnInit, EventEmitter, ViewChild,
	ElementRef
} from '@angular/core';
import {PopupService, IPopupSettings} from 'ng2-qgrid/plugins/popup/popup.service';
import {PluginComponent} from '../plugin.component';
import {RootService} from 'ng2-qgrid/infrastructure/component';
import {TemplateHostService} from 'ng2-qgrid/template';
import {POPUP_NAME, POPUP_CLOSE_NAME} from '../definition';
// import {PopupTriggerComponent} from './popup.trigger.component';

@Component({
	selector: 'q-grid-popup',
	// templateUrl: './popup.component.tpl.html',
	template: `
		<ng-container key="{{id}}-popup.tpl" [context]="context"></ng-container>
	`,
	providers: [TemplateHostService, PopupService]
})

export class PopupComponent extends PluginComponent implements OnInit, OnDestroy {
	@Input() id: string;
	// @Input() key: string;
	// @Input() get popup() { return this; }

	@Input('resource') resourceModel: any;

	@Output() close = new EventEmitter<string>();

	// @ViewChild(PopupTriggerComponent) trigger: PopupTriggerComponent;

	// private get triggerKey(){
	// 	return `trigger-${this.id}`;
	// }

	constructor(@Optional() root: RootService,
					private popupService: PopupService,
					private templateHost: TemplateHostService,
					private element: ElementRef
	) {
		super(root);

		this.models = ['popup'];
		templateHost.key = `${this.id}-popup`; // e.g. "column-chooser-popup"
	}

	ngOnInit() {
		super.ngOnInit();
	}

	private doSmthInShow() {
		// this.$transclude((clone, scope) => {
		//   template = clone;
		//   templateScope = scope;
		//
		//   this.$element.append(clone);
		// });
		//
		// template.remove();
		// templateScope.$destroy();
		//
		// super.show();
		// return null;
	}

	public show(): void {
		let template = null;
		let templateScope = null;

		this.doSmthInShow();
	}

	private scope() {
		// this.$scope
		return null;
	}

	private onClose() {
		return this.close.emit(POPUP_CLOSE_NAME);
	}

	public open(settings: IPopupSettings): void {
		settings.id = this.id;
		settings.close = this.onClose();
		this.popupService.open(
			this.element,
			settings,
			this.model,
			this.scope
		);
	}

	get resource(): any {
		return this.model.popup().resource;
	}

	ngOnDestroy(): void {
		super.ngOnDestroy();
		if (this.popupService.isOpened(this.id)) {
			this.popupService.close(this.id);
		}
	}
}
