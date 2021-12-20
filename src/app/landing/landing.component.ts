import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public now: Date = new Date();

  constructor() {
  //   setInterval(() => {
  //     this.now = new Date()
  //   }, 1)
  }
  ngOnInit(): void {
    timer(0, 1000).subscribe(() => {
      this.now = new Date()
    })
  }

}
