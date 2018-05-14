import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [LoginComponent]
})
export class ComponentsModule { }
