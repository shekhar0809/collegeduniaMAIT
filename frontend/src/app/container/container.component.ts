import { Component, OnInit } from '@angular/core';
import  *  as  data  from  'src/assets/colleges.json';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  products:  any  = (data  as  any).default;
  cards = data.colleges;

  ngOnInit(): void {

    console.log(data);
  }

}
