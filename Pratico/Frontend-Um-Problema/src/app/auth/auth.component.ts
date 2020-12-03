import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Globals } from '../globals/globals';

export class AuthResponse {
  token:string;
  usuario: Usuario;
  success:boolean;
}

export class Usuario{
  idUsuario: number;
  nome:string;
}


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public nome:string;
  public senha:string;

  public authInvalido:boolean;
  
  constructor(public authService:AuthService,public router: Router,public globals:Globals) { }

  ngOnInit(){
    this.authInvalido=false;
  }

  auth(){
    this.authService.auth(this.nome, this.senha).subscribe( response =>{
      console.log("Response" + response.token)
      if(response.success == true){
        console.log("Entro autente")
        this.globals.loginData.token = response.token;
        this.globals.loginData.usuario = response.usuario;
        this.authInvalido=false;
        this.router.navigate(["/home"]);
      }else{
        this.authInvalido=true;
      }
    },err =>{
      this.authInvalido =true;
    });
  }
}
