import { LoginComponent } from './components/login/login.component';


export const appRoutes = [
  {
    path: '',
    redirectTo: 'workspace',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'workspace',
    loadChildren: './layout/layout.module#LayoutModule'
  }
];
