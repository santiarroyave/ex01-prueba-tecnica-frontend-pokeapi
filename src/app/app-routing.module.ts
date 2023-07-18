import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ListaPokemonsComponent } from './components/lista-pokemons/lista-pokemons.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"home", component: HomeComponent},
  {path:"pokemons", component: ListaPokemonsComponent},
  {path:"about", component: AboutComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
