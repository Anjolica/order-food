import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CommonService } from './services/common.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _webService: CommonService,
        private _router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let roles = route.data["roles"] as Array<string>;
        if (this._webService.loggedIn() && roles == null || roles.indexOf(this._webService.usertypes) != -1) {
            return true;
        }
        else {
            this._router.navigate(['/']);
            return false;
        }
    }

}