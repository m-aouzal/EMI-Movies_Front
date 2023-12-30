import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FavoritedComponent } from './favorited/favorited.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
const routeConfig: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'favorited',
    component: FavoritedComponent,
    title: 'favorited page',
    canActivate: [AuthGuard]
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login page',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup page',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Home notfound',
  },
];

export default routeConfig;
