import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app/app.component';
import { resumeComponent } from './app/resume.component/resume.component';
// import { AppModule } from './app/app.module';

@NgModule({
	imports: [ BrowserModule ],
	declarations: [
		AppComponent,
		resumeComponent,
	 ],
	bootstrap: [ AppComponent ]
})
class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
