import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { RenderNotifierDirective } from './directives/render-notifier.directive';

@NgModule({
	declarations: [
		AppComponent,
        RenderNotifierDirective
	],
	imports: [
		BrowserModule
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
