import { Component, OnInit } from '@angular/core';
import  *  as  data  from  'src/assets/colleges.json';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  products:  any  = (data  as  any).default;
  cards = data.colleges;

  ngOnInit(): void {
    console.log(this.cards)
  }

}
