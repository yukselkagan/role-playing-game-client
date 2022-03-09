import { AuthenticationService } from './../../services/authentication.service';
import { RegisterFrom } from './../../models/register-form';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }


  registerForm : FormGroup = new FormGroup({
    username : new FormControl(null, Validators.required),
    email : new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl(null, Validators.required)

  });


  submitRegisterForm(){
    let newRegisterForm = new RegisterFrom();


    newRegisterForm.username = this.registerForm.controls['username'].value;
    newRegisterForm.email = this.registerForm.controls['email'].value;
    newRegisterForm.password = this.registerForm.controls['password'].value;



    newRegisterForm.username = "tolga";
    newRegisterForm.email = "tolga@mail.com";
    newRegisterForm.password = "123";


    if(this.registerForm.valid || true ){

      this.authenticationService.postRegisterForm(newRegisterForm).subscribe((response) => {

        console.log(response);

      });


    }else{
      console.log("Need complete form");
    }


  }




}
