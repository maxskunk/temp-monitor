import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartModule } from 'primeng/chart';
import { TempLogService } from './service/temp-log.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [TempLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
