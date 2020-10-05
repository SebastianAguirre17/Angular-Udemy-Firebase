import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ComponetsModule } from './components/componets.module';

import { AppComponent } from './app.component';
import { GotyComponent } from './pages/goty/goty.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        GotyComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponetsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
