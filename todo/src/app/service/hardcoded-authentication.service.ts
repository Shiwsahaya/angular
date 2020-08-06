import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('befor' + this.isUserLoggedIn())
    if(username === 'shiw' && password=== '123') {
      sessionStorage.setItem('authenticaterUser', username)
      console.log('after' + this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('authenticaterUser')
  }
}
