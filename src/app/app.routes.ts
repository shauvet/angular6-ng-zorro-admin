import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/auth/auth-guard';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'workspace',
    loadChildren: './layout/layout.module#LayoutModule',
    canLoad: [AuthGuard]
  }
];
