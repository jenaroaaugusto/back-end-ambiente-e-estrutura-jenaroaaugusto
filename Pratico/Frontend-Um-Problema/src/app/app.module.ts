import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DemandasComponent, MngDemandaDialog } from './demandas/demandas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { GestaoComponent } from './gestao/gestao.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
// import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { Globals } from './globals/globals';

@NgModule({
  declarations: [
    AppComponent,
    DemandasComponent,
    UsuariosComponent,
    GestaoComponent,
    MngDemandaDialog,
    HomeComponent,
    AuthComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    BrowserAnimationsModule, 
    HttpClientModule
  ],
  entryComponents: [
    MngDemandaDialog
  ],
  // exports: [
  //   CommonModule,
  //   MatInputModule,
  //   MatButtonModule,
  //   MatRadioModule,
  //   MatFormFieldModule,
  //   MatDialogModule,
  // ],
  providers: [AuthGuard,Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
