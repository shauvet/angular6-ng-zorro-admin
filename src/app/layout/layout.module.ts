import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';

import { LayoutRoutes } from './layout.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes)
  ],
  declarations: [TopbarComponent, LeftbarComponent, LayoutComponent]
})
export class LayoutModule { }
