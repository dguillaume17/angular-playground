import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { NgForComponent } from './components/ng-for/ng-for.component';

@NgModule({
	declarations: [
		AppComponent,
        NgForComponent
	],
	imports: [
		BrowserModule
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
