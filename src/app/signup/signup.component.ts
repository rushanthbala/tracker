import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    Cpassword:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    phoneno:new FormControl(null,Validators.required),
    gender:new FormControl(null,Validators.required),
    age:new FormControl(null,Validators.required),
    address:new FormControl(null,Validators.required)
  })
  agelist = [
    { "age": "choose one" },
    { "age": "below 30" },
    { "age": "above 30" }
  ];
  users: any = {};

  clicksub() {
    this.users = Object.assign(this.users, this.form.value);
    // console.log(this.users);
    this.addUser(this.users)
    this.form.reset();
  }
  addUser(user: []) {
  const signup: string[] = ['/login'];

    var userss = [];
    if (localStorage.getItem('user')) {
      userss = JSON.parse(localStorage.getItem('user') || '{}');
      userss = [...userss, user]
    } else {
      userss = [user]
    }
    localStorage.setItem('user', JSON.stringify(userss))
    this.router.navigate(signup);

  }
  // ROUTER_DIRECTIVES
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

}
