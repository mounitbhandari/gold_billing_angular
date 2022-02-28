import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {SidenavModule} from "./sidenavs/sidenav/sidenav.module";
import {HeaderModule} from "./header/header.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./services/auth.interceptor";
import {SidenavOwnerModule} from "./sidenavs/sidenav-owner/sidenav-owner.module";
import {SidenavDeveloperModule} from "./sidenavs/sidenav-developer/sidenav-developer.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MAT_DATE_LOCALE} from "@angular/material/core";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    // SidenavComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        HttpClientModule,

        SidenavModule,
        HeaderModule,
        SidenavOwnerModule,
        SidenavDeveloperModule,
        FontAwesomeModule,
        MatProgressSpinnerModule,

    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: MAT_DATE_LOCALE, useValue: 'en-in' },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
