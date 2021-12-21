import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form =new FormGroup({
    username: new FormControl(null,Validators.required),
    password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    Cpassword:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    phoneno:new FormControl(null,Validators.required),
    gender:new FormControl(null,Validators.required),
    age:new FormControl(null,Validators.required),
    address:new FormControl(null,Validators.required)


  })
  agelist=[
    {"age":"choose one"},
    {"age":"below 30"},
    {"age":"above 30"}
  ];
  clicksub(){
    console.log(this.form.value);
    this.form.reset();
  }

  constructor() { }
  

  ngOnInit(): void {
  }

}
