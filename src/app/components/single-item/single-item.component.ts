import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() singleProduct: any;
  buttonTitle = 'ADD';
  qtdSelected : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

  }

}
