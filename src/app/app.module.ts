import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconsModule } from '@progress/kendo-angular-icons';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';

import { NavbarComponent } from './navbar/navbar.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GridModule,
    DialogsModule,
    IconsModule,
    ButtonsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
