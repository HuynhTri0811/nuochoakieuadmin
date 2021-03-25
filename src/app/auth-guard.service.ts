import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router , private cookieService : CookieService) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
  if (!this.cookieService.check('User')) {
      this.router.navigateByUrl('login')
      return false;
    }
    return true;
  }
}
