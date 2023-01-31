import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  public heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  public deletedHeroe: string = '';
  borrarHeroe():void{
    this.deletedHeroe = this.heroes.shift() || '';
    //console.log('Heroe borrado: ', this.deletedHeroe);
  }
}
