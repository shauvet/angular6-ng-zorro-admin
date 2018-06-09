import { LayoutComponent } from './layout.component';

export const LayoutRoutes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full'},
      {
        path: 'user',
        loadChildren: '../bz-modules/user/user.module#UserModule'
      }
    ]
  }
];
