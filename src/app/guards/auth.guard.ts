import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../service/user.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
const userService = inject(UserService);
const router = inject(Router);

if (userService.isAuthenticated()) {
  return true;
} else {
router.navigate(['/login'], {queryParams: { returnUrl: state.url }});
return false;
}
};
