import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private hc: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.hc.get('/mock/users.json');
  }
}
