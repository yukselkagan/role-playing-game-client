import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonInformation } from 'src/app/models/common-information';
import { LoginForm } from 'src/app/models/login-form';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private dataTransferService: DataTransferService) { }

  ngOnInit(): void {
  }

  subscription: Subscription = new Subscription();
  commonInformationSubscription: Subscription = new Subscription();
  commonInformation:CommonInformation = new CommonInformation();


  loginForm : FormGroup = new FormGroup({
    username : new FormControl(null, Validators.required),
    password : new FormControl(null, Validators.required)

  });


  submitLoginForm(){
    let newLoginForm = new LoginForm();


    newLoginForm.username = "tolga";
    newLoginForm.password = "123";

    this.authenticationService.postLoginForm(newLoginForm).subscribe((response) => {

      console.log(response);

      let token = response.data['accessToken'];
      localStorage.setItem('token', token);
      this.changeAuthenticationStatus(true);



    });

    console.log("login");
  }



  changeAuthenticationStatus(input:boolean){
    let newInformation = this.commonInformation;
    newInformation.isAuthenticated = input;
    this.dataTransferService.changeCommonInformation(newInformation);
  }









}
