import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { DemandasComponent } from './demandas/demandas.component';
import { GestaoComponent } from './gestao/gestao.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:'',component:AuthComponent}, 
  {path:'home',component:HomeComponent,canActivate:[AuthGuard],
    children:[
      {path:'demandas',component:DemandasComponent },
      {path:'usuarios',component:UsuariosComponent},
      {path:'gestao',component:GestaoComponent},
    ]

  },
  {path:'auth', component:AuthComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
