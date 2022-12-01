import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { OIAcadamyComponent } from './oiacadamy/oiacadamy.component';
import { DetailsGeneralComponent } from './details-general/details-general.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    OIAcadamyComponent,
    DetailsGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
