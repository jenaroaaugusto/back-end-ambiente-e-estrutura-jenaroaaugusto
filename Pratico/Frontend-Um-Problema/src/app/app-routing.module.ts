import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandasComponent } from './demandas/demandas.component';
import { GestaoComponent } from './gestao/gestao.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:'demandas',component:DemandasComponent },
  {path:'usuarios',component:UsuariosComponent},
  {path:'gestao',component:GestaoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
