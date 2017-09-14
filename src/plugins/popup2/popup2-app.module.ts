import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {PopupComponent} from './popup';
import {PopupDemoComponent} from './popupdemo';

@NgModule({
	imports: [
		BrowserModule,

		RouterModule.forRoot([
			{
				// Register here to stop error "no factory resolver for PopupComponent". It is not used as routing
				path: 'PopupComponent',
				component: PopupComponent,

			},
			{
				// Register here to stop error "no factory resolver for PopupComponent". It is not used as routing
				path: 'PopupDemo',
				component: PopupDemoComponent,
			}
		])
	],
	declarations: [PopupComponent, PopupDemoComponent],
})

export class Popup2AppModule {
}
