import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NavbarComponent } from './navbar/navbar.component';
import { GraphicComponent } from './graphic/graphic.component';



@NgModule({
    declarations: [
        NavbarComponent,
        GraphicComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
        NgxChartsModule
    ],
    exports: [
        NavbarComponent,
        GraphicComponent
    ]
})
export class ComponetsModule { }
