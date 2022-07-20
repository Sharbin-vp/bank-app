import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pswd = ""
  acno = ""
  welcome = "we are with you"
  account = "enter your account here"
  userDetails:any = {
    1000: { acno: 1000, username: 'neer', password: 1000, balance: 5000 },
    1002: { acno: 1002, username: 'roy', password: 1002, balance: 600 },
    1003: { acno: 1003, username: 'teena', password: 1003, balance: 100005 }

  }

  constructor() { }

  ngOnInit(): void {
  }

  login() {

    //  console.log('hellow',this.acno,this.pswd);
    var acno = this.acno
    var pswd = this.pswd
    let userdetails = this.userDetails
    if (acno in userdetails) {
      if (pswd == userdetails[acno]['password']) {
        alert('login sucess')
      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert('user does not exist')
    }

  }
}
