import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment } from 'src/app/actions/cart.action';
import { CartModel } from 'src/app/models/cart.model';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() singleProduct: any;
  buttonTitle = 'ADD';
  qtdSelected : number = 0;

  constructor(
    private store: Store<CartModel>,
  ) { }

  ngOnInit(): void {
  }

  submit(product: any){
    let price = this.qtdSelected * product.price; 
    this.store.dispatch(increment({value: price}));
  }


}
