import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  // agregar(event:any):void{
  //   event.preventDefault();
  //   console.log('Hey!!!');
  // }
  
  // personajes: Personaje[] = [];

    nuevo: Personaje = {
      nombre:'Maestro Roshi',
      poder :1000
  }

  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje( args: Personaje ){
  //   // console.log('Main Page Component');
  //   // console.log( args );
  //   // this.personajes.push(args);
  // }

  //dependency injection
  constructor( 
    // private dbzService: DbzService 
    ){ 
    // this.personajes = this.dbzService.personajes;
   }
}
