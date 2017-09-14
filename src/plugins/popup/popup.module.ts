import {NgModule} from '@angular/core';

import {TemplateModule} from 'ng2-qgrid/template';
import {PopupComponent} from 'ng2-qgrid/plugins/popup/popup.component';
import {PopupHeadComponent} from 'ng2-qgrid/plugins/popup/popup.head';
import {PopupBodyComponent} from 'ng2-qgrid/plugins/popup/popup.body';
import {PopupTriggerComponent} from 'ng2-qgrid/plugins/popup/popup.trigger';
import {PopupPanelComponent} from './popup.panel';
import {PopupService} from './popup.service';

@NgModule({
	imports: [TemplateModule],
	exports: [PopupComponent, PopupHeadComponent, PopupBodyComponent, PopupTriggerComponent, PopupPanelComponent],
	declarations: [PopupComponent, PopupHeadComponent, PopupBodyComponent, PopupTriggerComponent, PopupPanelComponent],
	providers: [PopupService],
})
export class PopupModule {
}
