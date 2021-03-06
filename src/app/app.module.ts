import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactService } from './contacts.service';
import { MaterialsModule } from './material';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,MaterialsModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ContactService]
})
export class AppModule { }
