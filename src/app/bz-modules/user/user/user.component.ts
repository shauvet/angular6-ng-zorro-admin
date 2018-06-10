import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSet = [];

  constructor(private userService: UserService) {
   }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      console.log(users);
      this.dataSet = users;
    });
  }

}
