import { Injectable } from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import { AuthService } from "../services/auth.service";
 
@Injectable({
    providedIn: 'root'
})
  
export class CheckAuth implements CanActivate{
    constructor (private router: Router, private authService: AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
        if (!this.authService.isLoggedIn) {
            this.router.navigateByUrl('/login');
            return false;
        } else {
            return true;
        }
    }
}
