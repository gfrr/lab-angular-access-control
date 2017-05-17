import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccessControlLogService } from "./service/access-control-log.service";
import { AppComponent } from './app.component';
import { LogFromComponentComponent } from './log-from-component/log-from-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LogFromComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccessControlLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
