import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { ViewClubComponent } from './view-club/view-club.component';

const routes: Routes = [
  { path:'', redirectTo:'/home',pathMatch:'full'},
  { path:'home',component:HomeComponent },
  { path:'view/:id',component:ViewClubComponent },
  { path:'error',component:ErrorPageComponent },
  { path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
