import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router) {
  }
  canActivate(): boolean {
    if (localStorage.getItem('auth') === 'e7822c3412d066580ce21aa0ba2055eb') {
      return true;
    } else {
      this.router.navigate(['auth']).then();
      return false;
    }
  }

}
