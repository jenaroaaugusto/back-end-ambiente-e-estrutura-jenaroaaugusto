import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DemandasService} from '../demandas.service';


export class Demanda{
  iddemandas:number;
  categorias:string;
  local:string;
  usuario_idusuario:string;
  status:string;
}

// const DEMANDAS: Demanda[]=[
//   {iddemandas:1,categorias:"Burraco",local:"RuaB",usuario_idusuario:"Jose",status:"OK"},
//   {iddemandas:2,categorias:"Vazamento",local:"RuaA",usuario_idusuario:"Luana",status:"analisando"}

// ];

@Component({
  selector: 'app-demandas',
  templateUrl: './demandas.component.html',
  styleUrls: ['./demandas.component.css']
})
export class DemandasComponent implements OnInit {
  displayedColumns: string[]=['iddemandas','categorias','local','usuario_idusuario','status']
  dataSource:Demanda[];
  constructor( private service:DemandasService, public dialog:MatDialog) { }

  ngOnInit() {
    this.service.getDemandas().subscribe(demandas =>this.dataSource=demandas)
  }
  openNewDialog(): void{
    const dialogRef = this.
  }
}

@Component({
  selector: 'dialog-mng-demanda', 
  templateUrl:'dialog-mng-demanda.html'
})
export class MngDemandaDialog{

    constructor(public dialogRef: MatDialogRef<MngDemandaDialog>,
      @Inject(MAT_DIALOG_DATA) public data: Demanda){}   
      favoriteSeason: string;
      seasons: string[] = ['Buraco', 'Vazamento']; 
   
    onNoClick(): void{
      this.dialogRef.close();
    }
}