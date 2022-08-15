import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
