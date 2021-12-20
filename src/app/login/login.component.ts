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
      'email': new FormControl(null,Validators.required),
      'password': new FormControl(null,Validators.required),
      'check': new FormControl(true),
    })
  }
  onSubmit() {
  console.log(this.loginForm.value);
  
}
}
