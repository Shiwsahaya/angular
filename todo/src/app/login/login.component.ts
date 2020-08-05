import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'shiw'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false


  constructor(private router: Router) { }

  handleLogin() {
    if(this.username==='shiw' && this.password==='123') {
      this.router.navigate(['welcome' , this.username])
      this.invalidLogin = false;
    } else {
      this.invalidLogin =  true;
    }
  }

  ngOnInit(): void {
  }

}
