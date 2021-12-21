import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup
  constructor() {
    // this.loginForm = []
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'check': new FormControl(true),
    })
  }
  onSubmit() {
    console.log(this.loginForm.value);
    let isUser = this.authUser()
    if (isUser) {
      localStorage.setItem('userData', JSON.stringify(isUser));
      localStorage.setItem('isUser', "true");
    }
    console.log(isUser);
  }
  authUser() {
    let usersArray = []
    if (localStorage.getItem('user')) {
      usersArray = JSON.parse(localStorage.getItem('user') || '{}')
    }
    return usersArray.find((p: { username: any; password: any }) => (p.username === this.loginForm.value.email && p.password === this.loginForm.value.password)
    )
  }
}
