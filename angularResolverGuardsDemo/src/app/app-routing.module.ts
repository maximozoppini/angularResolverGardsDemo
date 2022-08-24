import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoadGuard } from './can-load-component/can-load.guard';
import { HomeComponent } from './home/home.component';
import { LoginDeactivateGuard } from './login-deactivate.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamGuard } from './team.guard';
import { TeamsComponent } from './teams/teams.component';
import { TeamsResolver } from './teams/teams.resolver';

const routes: Routes = [
  //initial route
  { path: 'home', component: HomeComponent },

  //teams list component route without resolver
  // { path: 'teams', component: TeamsComponent, data: { pageTitle: 'Teams list'} },

  //teams list component route with resolver
  {
    path: 'teams',
    component: TeamsComponent,
    data: { pageTitle: 'Teams list'},
    canActivate: [TeamGuard],
    resolve: { resolvedData: TeamsResolver}
  },

  //login routing
  {
    path: 'login',
    component: LoginComponent,
    data: { pageTitle: 'LogIn page'},
    canDeactivate: [LoginDeactivateGuard]
  },

  //CanLoad module with canload guard
  {
    path: 'canLoad',
    canLoad: [CanLoadGuard],
    loadChildren: () => import('./can-load-component/can-load.module').then(m => m.CanLoadModule)
  },

  //no rounte
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //no page found
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
