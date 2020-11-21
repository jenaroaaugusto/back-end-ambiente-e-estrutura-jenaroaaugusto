import { Component, Inject, OnInit,NgModule } from '@angular/core';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {DemandasService} from '../demandas.service';


export class Demanda{
  iddemandas:number;
  categorias:string;
  local:string;
  resumo:string;
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
  displayedColumns: string[]=['iddemandas','categorias','local','resumo','usuario_idusuario','status','acoes']
  // dataSource:Demanda[];
  dataSource = new MatTableDataSource<Demanda>();
  constructor( private service:DemandasService, public dialog:MatDialog) { }

  ngOnInit() {
    this.service.getDemandas().subscribe(demandas =>this.dataSource.data=demandas)
  }
  openNewDialog(): void{
    const dialogRef = this.dialog.open(MngDemandaDialog,{
      width:'750px',
      data:new Demanda()
    });
    
    dialogRef.afterClosed().subscribe(demanda =>{
      console.log(demanda);
      this.service.setDemanda(demanda).subscribe(demaId =>{
        console.log("No docomp"+demaId)
        this.service.getDemanda(demaId).subscribe(newDemanda =>{
          this.dataSource.data = this.dataSource.data.concat(newDemanda);
          console.log("No comcateas"+demaId)
        });
      });
    })


  }

  openEditDialog(demanda:Demanda): void{
    const dialogRef = this.dialog.open(MngDemandaDialog,{
      width:'750px',
      data:demanda
    });
    
    dialogRef.afterClosed().subscribe(demanda =>{
      console.log(demanda);
      this.service.updateDemanda(demanda).subscribe(_ =>{
          this.dataSource.data = this.dataSource.data.map(oldDemanda =>{
              if(oldDemanda.iddemandas=demanda.iddemandas) return demanda;
          });
        });
      });
  }

  openExcluirDialog(demanda:Demanda): void{
    this.service.deleteDemanda(demanda.iddemandas).subscribe(_ =>{
      this.dataSource.data = this.dataSource.data.filter(oldDemanda => oldDemanda.iddemandas != demanda.iddemandas)

    });
  }
}
 
@Component({
  selector: 'dialog-mng-demanda', 
  templateUrl:'dialog-mng-demanda.html'
})
export class MngDemandaDialog{

    constructor(public dialogRef: MatDialogRef<MngDemandaDialog>,
      @Inject(MAT_DIALOG_DATA) public data: Demanda){}   
      // favoriteSeason: string;
      // seasons: string[] = ['Buraco', 'Vazamento']; 
   
    onNoClick(): void{
      this.dialogRef.close();
    }
}