import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { HomeComponent } from './home/home.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'sobrenos', component: SobrenosComponent},
  {path: 'faleconosco', component: FaleConoscoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
