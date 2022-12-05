import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KotFooterComponent } from './componets/feature-modules/client-side/kot-footer/kot-footer.component';
import { NavbarComponent } from './componets/feature-modules/client-side/navbar/navbar.component';
import { MenuModule } from "./componets/feature-modules/client-side/menu/menu.module";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        KotFooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MenuModule
    ]
})
export class AppModule { }
