import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {
    path:'',
   //component: HomeComponent,
    redirectTo: 'login',
    pathMatch: 'full'
    
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'**',
    redirectTo: 'login',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
