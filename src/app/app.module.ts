import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { BasicFormComponent } from './page/basic-form/basic-form.component';
import { ReactiveFormComponent } from './page/reactive-form/reactive-form.component';
import { HighlightDirective } from './highlight.directive';
import { TrimCreditCardPipe } from './pipe/trim-credit-card.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BasicFormComponent,
    ReactiveFormComponent,
    HighlightDirective,
    TrimCreditCardPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
