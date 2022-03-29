import { Component, OnInit } from '@angular/core';
import {  ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
class NewUser {
  private name: string;
  private email: string;
  private gender: string;
  private status: string="active";
  constructor(email:string,name: string,gender: string,status: string)
  {
    this.email=email;
    this.name=name;
    this.gender=gender;
    this.status=status;
  }

  setGender(gender:string) {
    this.gender=gender;
  }

  getGender() {
   return this.gender;
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {


  registerForm: FormGroup; //kayıt formu

  registered = false; //register tusuna basılması
  isRegisterSuccess = false;
  constructor( private formBuilder: FormBuilder, private api : ApiService) { }

  get f_register() { return this.registerForm.controls; }

  onSubmitRegister() { //Kayıt olunmuş mu?
    this.registered = true; //kayıt değerini true yap.
    if (this.registerForm.invalid) {
        return;
    }
    if(this.registered)
    {
      if(this.registerForm.value.password !=this.registerForm.value.password2 ) //password iki kere aynı girilmediyse;
      {

       this.registerForm.controls['password2'].setErrors({mustMatch: true});
      }else{

       alert("Register is succesfully. You can login with your credentail informations. !!!");
       console.log(this.registerForm.value);


       this.api.postUser(this.createNewUser(this.registerForm.value));

      }

    }

  }

createNewUser(form_input:any)
{

  let newUser: NewUser = new NewUser(form_input.email,
    form_input.password,
    form_input.gender ,
    "active");

    if (newUser.getGender() == 'false') {
      newUser.setGender('female') ;
    }
    else {
      newUser.setGender('male') ;
    }

  console.log(newUser);
  return newUser;

}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required ]],
      gender: [false]

      }
      );
  }
}
