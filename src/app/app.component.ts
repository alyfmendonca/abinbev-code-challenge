import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products = [
    {
      id: '0',
      name: 'Modelo Negra',
      units: '12 Unit º 33oz Bottle',
      price: 'RD$32.00/Unit',
      onSale: 'Buy 3, get 1 free.',
      detailLink: '',
      isRecyclable: false,
      image: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png'
    },
    {
      id: '1',
      name: 'Presidente Light',
      units: '16 Unit º 330mm Bottle',
      price: 'RD$43.00/Unit',
      onSale: 'Buy 3, get 1 free Red Bull or 2 Pepsi Black.',
      detailLink: '',
      isRecyclable: true,
      image: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png'
    },
    {
      id: '2',
      name: 'Brahma Light very very light 33 Onz - Caja [12 Botellas]',
      units: '16 Unit º 330ml Bottle',
      price: 'RD$43.00/Unit',
      onSale: 'For every 5 you buy, get up to 2 free.',
      detailLink: '',
      isRecyclable: true,
      image: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png'
    },
    {
      id: '3',
      name: 'Budweiser',
      units: '16 Unit º 330ml Bottle and extra long summary on multiple lines',
      price: 'RD$26.00/Unit',
      onSale: 'For every 5 you buy, get up to 3 free Red Bull or 2 free Pepsi Black.',
      detailLink: '',
      isRecyclable: true,
      image: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png'
    }
  ]

  title = 'abinbev-code-challenge';
}
