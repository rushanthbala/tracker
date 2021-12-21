import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {
  // isUser!: Boolean; 
  ifUser : Boolean = false;
  userData = {username:String,password:String}
  constructor() {
  }
  isUser() {
    if (localStorage.getItem('isUser')) {
      console.log('jii');
    }
    if (localStorage.getItem('userData')) {
      this.ifUser = true;
      this.userData= JSON.parse(localStorage.getItem('userData') || '{}')
    }
  }
  ngOnInit(): void {
    this.isUser()
    console.log(this.ifUser);
    
  }

}
