import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() {

  }
  content = ['contant'];
  title = 'Card title';
  card = [
    {
      content: 'contant01',
      title: 'card01',
    }, {
      content: 'contant02',
      title: 'card02',
    }, {
      content: 'contant03',
      title: 'card03',
    },
    {
      content: 'contant04',
      title: 'card04',
    },
  ]
  ngOnInit(): void {
  }

}
