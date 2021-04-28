import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleItemComponent } from './components/single-item/single-item.component';
import { StoreModule } from '@ngrx/store';

import {cartReducer} from './reducers/cart.reducers';

@NgModule({
  declarations: [
    AppComponent,
    SingleItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      cart: cartReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
