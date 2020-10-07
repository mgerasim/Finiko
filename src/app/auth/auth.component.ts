import { Component, OnInit } from '@angular/core';
import {AuthGuard} from "../auth.guard";
import {Router} from "@angular/router";
import {Md5} from 'ts-md5';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  password: string;

  constructor(
    public router: Router,
    private authGuard: AuthGuard
  ) { }

  ngOnInit(): void {
  }

  login() {
    const md5 = new Md5();
    localStorage.setItem('auth', md5.appendStr(this.password).end().toString());
    if (!this.authGuard.canActivate()) {
    }
    this.router.navigate(['/']).then();
  }

}
