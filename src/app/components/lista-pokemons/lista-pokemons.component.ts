import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.css']
})
export class ListaPokemonsComponent implements OnInit {

  // ATRIBUTOS
  pokemons:any = new Array;
  pokemon:any = null;
  // idsNamesImages:any[] = [];
  idsNamesImages:any= new Array;

  // CONSTRUCTOR
  constructor(private pokemonsService: PokemonsService){};

  
  // METODOS
  ngOnInit(): void {
    // Obtiene todos los pokemons y los filtra creando un array con el ID, Nombre y Foto
    this.pokemonsService.getAll().subscribe( result => {
      this.obtenerDatosFiltrados(result);
    });
  }
  
  verPokemon(url:string){
    alert("Mostrando pokemon");
  };

  // Recorre la lista de pokemons y guarda (ID, Nombre y Foto en la variable Pokemons)
  obtenerDatosFiltrados(lista:any):any{
    let urls:any[] = [];

    // Extrae las urls y las guarda en un array
    for (let i = 0; i < lista.results.length; i++) {
      urls.push(lista.results[i].url);
    }

    // Recorre las urls y obtiene las Ids, Fotos y Nombres
    for (let i = 0; i < urls.length; i++) {
      this.pokemonsService.getByUrl(urls[i]).subscribe( result => {
        this.pokemons.push(this.obtenerIdNombreFoto(result));
      });
    }
  }

  // Recibe un pokemon como argumento, filtra la informacion y devuelve un string con el (ID, Nombre y Foto)
  obtenerIdNombreFoto(dato:any):string{
    // Ruta fotos -> /sprites > other > official-artwork > front_default
    let pokemon:any;
    pokemon = {
      "id": dato.id,
      "name": dato.name,
      "image": dato.sprites.other["official-artwork"]["front_default"]
    };
    return pokemon;
  }
}
