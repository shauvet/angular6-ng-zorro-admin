import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { userRoutes } from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
    NgZorroAntdModule.forRoot()
  ],
  declarations: [UserComponent],
  providers: [
    UserService
  ]
})
export class UserModule { }
