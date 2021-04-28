import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cart$: Observable<number>;

  constructor(private store: Store<{cart: number}>) {
      this.cart$ = store.select('cart');
  }

  products = [
    {
      name: 'Modelo Negra',
      units: '12 Unit º 33oz Bottle',
      price: '32.00',
      onSale: 'Buy 3, get 1 free.',
      detailLink: '',
      isRecyclable: false,
      image: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png'
    },
    {
      name: 'Presidente Light',
      units: '16 Unit º 330mm Bottle',
      price: '43.00',
      onSale: 'Buy 3, get 1 free Red Bull or 2 Pepsi Black.',
      detailLink: '',
      isRecyclable: true,
      image: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png'
    },
    {
      name: 'Brahma Light very very light 33 Onz - Caja [12 Botellas]',
      units: '16 Unit º 330ml Bottle',
      price: '43.00',
      onSale: 'For every 5 you buy, get up to 2 free.',
      detailLink: '',
      isRecyclable: true,
      image: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png'
    },
    {
      name: 'Budweiser',
      units: '16 Unit º 330ml Bottle and extra long summary on multiple lines',
      price: '26.00',
      onSale: 'For every 5 you buy, get up to 3 free Red Bull or 2 free Pepsi Black.',
      detailLink: '',
      isRecyclable: true,
      image: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png'
    }
  ]

  title = 'abinbev-code-challenge';
}
