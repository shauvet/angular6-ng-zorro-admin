import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) {
    console.log('in user.');
   }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      console.log(users);
    });
  }

}
