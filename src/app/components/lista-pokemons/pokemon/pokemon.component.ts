import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  // ATRIBUTOS
  id!:number;
  pokemon:any;

  // CONSTRUCTOR
  constructor( private route: ActivatedRoute, private pokemonsService: PokemonsService, ) { };

  ngOnInit(){

    // Obtengo el id pasado por la ruta
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    // Obtener pokemon por ID
    this.getById(this.id);
  };

  // METODOS
  getById(id:any){
    this.pokemonsService.getById(id).subscribe( result => this.pokemon = result);
  }
}
