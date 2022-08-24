import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User | undefined;

  constructor() { }

  public isLoggedIn(): boolean{
    return !!this.user;
  }
  public logOut(): void{
    this.user = undefined;
  }
  public logIn(user: User){
    this.user = user;
  }
}
