import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './components/Forms/Reactive/reactive-forms/reactive-forms.component';
import { TdfFormsComponent } from './components/Forms/TDF/tdf-forms/tdf-forms.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tdf', component: TdfFormsComponent},
  {path: 'reactive', component: ReactiveFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const allRoutes = [HeaderComponent,
                          TdfFormsComponent,
                          ReactiveFormsComponent];
