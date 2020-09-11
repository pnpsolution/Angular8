import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { PubicZoneComponent } from './page/pubic-zone/pubic-zone.component';

const routes: Routes = [
  {
    path: '', component: PubicZoneComponent,
    children: [{
      path: 'home', component: HomeComponent,
    }, {
      path: 'about', component: AboutComponent
    }, {
      path: 'login', component: LoginComponent
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
