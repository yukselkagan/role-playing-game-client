import { GameResponse } from './../models/game-response';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl:string = "https://localhost:44334/api/";

  constructor(private httpClient: HttpClient) { }



  postRegisterForm(model:any){
    return this.httpClient.post<GameResponse>(this.baseUrl+"Player/Register", model);
  }

  postLoginForm(model:any){
    return this.httpClient.post<GameResponse>(this.baseUrl+"Player/Login", model);
  }



}
