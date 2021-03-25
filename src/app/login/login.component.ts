import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _cookie : CookieService,private _router : Router) { }

  ngOnInit(): void {
  }
  Login()
  {
    this._cookie.set('User','ConMeoKeuMeoMeo');
    this._router.navigate(['dashboard']);
  }
}
