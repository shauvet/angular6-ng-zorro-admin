import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  public isLogin: any = false;
  public redirectUrl: string = null;

  constructor() {}

  signin(): Observable<boolean> {
    return of(true).pipe(
      delay(500),
      tap(val => {
        this.isLogin = true;
        sessionStorage.setItem('status', this.isLogin);
      })
    );
  }

  signout(): void {
    this.isLogin = false;
    sessionStorage.removeItem('status');
  }
}
