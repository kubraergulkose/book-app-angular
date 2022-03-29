import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { TransfereService } from 'src/app/services/transfere';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; //giriş formu
  submitted = false; //submit tusuna basılması
  public isLoginSuccess = false;

  constructor(private formBuilder: FormBuilder, private api : ApiService, private transfereService:TransfereService,private router: Router  ) { }

  get f() { return this.loginForm.controls; }

  onSubmitLogin() { //Login fonksiyonu

    this.submitted = true; //subnit değerini true yap.
    if (this.loginForm.invalid) {


        return;
    }

    if(this.submitted)
    {

      let res1:any;
      this.api.getSingleUser(this.loginForm.value.email,this.loginForm.value.password)
      .subscribe(res => {



      if(res.data.length>0)
      {
        this.isLoginSuccess=true;
        alert ('You login successfully');
        this.router.navigate(['/products'])

      }else{

        this.isLoginSuccess=false;
        alert("Email or password is wrong!!!");
        this.loginForm.controls['email'].setErrors({'incorrect': true});
        this.loginForm.controls['password'].setErrors({'incorrect': true});

      }
      this.transfereService.setData(this.isLoginSuccess);


      });


    }

  }

  ngOnInit(): void {



    //Form validasyonları login form için eklendi.
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      });
  }

}
