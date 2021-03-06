import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StripeConsService } from './stripe-cons.service';
import { StripeAuthService } from './stripe-auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()

  ],
  providers: [StripeConsService,StripeAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
