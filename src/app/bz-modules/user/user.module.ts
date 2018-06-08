import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserComponent],
  providers: [
    UserService
  ]
})
export class UserModule { }
