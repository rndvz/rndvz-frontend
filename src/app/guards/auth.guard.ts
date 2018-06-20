import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const loggedIn = this.userService.isLoggedIn();
    const nextPath = next.routeConfig.path;

    if (loggedIn && nextPath === 'login') {
      this.router.navigate([(next.queryParams['returnUrl'] || '/')]);
      return false;
    } else if (!loggedIn && nextPath !== 'login') {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    } else {
      return true;
    }
  }

}
