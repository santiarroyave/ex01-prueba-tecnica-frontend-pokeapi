import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  busqueda:any;

  // CONSTRUCTOR
  constructor(private pokemonsService: PokemonsService, private router: Router){ };


  // METODOS
  buscar(){
    let pokemon:any = new Array;

    // Busca el nombre y obtiene la id para luego redirigir a la vista
    if(this.busqueda != ""){
      this.pokemonsService.getUrlByName(this.busqueda.toLowerCase()).subscribe( result => {
        let id = this.obtenerId(result);
        this.router.navigateByUrl(`/pokemons/${id}`);
      });
    }
  }

  // Obtiene la id del pokemon que le pasamos
  obtenerId(dato:any):string{
    return dato.id
  }
}
