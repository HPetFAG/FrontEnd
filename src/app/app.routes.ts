import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ReviewDonationsComponent } from './pages/review-donations/review-donations.component';
import { AnimalComponent } from './pages/animal/animal.component';
import { authGuard } from './service/auth/guards/auth.guards';
import { AnimalformComponent } from './pages/animalform/animalform.component';
import { AprensentationComponent } from './pages/aprensentation/aprensentation.component';
import { AdoptionformComponent } from './pages/adoptionform/adoptionform.component';
import { FormspageComponent } from './pages/formspage/formspage.component';

export const routes: Routes = [
  // tela de inicio
  { path: '', component: AprensentationComponent },

  // tela de login
  { path: 'login', component: LoginComponent },
  { path: 'formulario', component: AdoptionformComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomepageComponent },
      { path: 'reviews-donations', component: ReviewDonationsComponent },
      { path: 'animal', component: AnimalComponent },
      { path: 'registrar', component: AnimalformComponent },
      { path: 'editar/:id', component: AnimalformComponent },
      { path: 'formularios', component: FormspageComponent },
      { path: 'formularios/analisar', component: AdoptionformComponent },
    ],
  },
];
