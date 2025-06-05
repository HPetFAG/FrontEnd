import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ReviewDonationsComponent } from './pages/review-donations/review-donations.component';
import { AnimalComponent } from './pages/animal/animal.component';
import { authGuard } from './service/auth/guards/auth.guards';

export const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomepageComponent },
      { path: 'reviews-donations', component: ReviewDonationsComponent},
      { path: 'animal', component: AnimalComponent}
    ],
  },
];
