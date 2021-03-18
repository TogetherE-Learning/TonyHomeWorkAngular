import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FromService } from '../app/FromService';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [FromService],
  bootstrap: [AppComponent]
})
export class AppModule { }
