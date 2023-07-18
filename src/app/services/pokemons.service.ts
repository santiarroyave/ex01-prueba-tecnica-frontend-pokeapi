import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = "https://pokeapi.co/api/v2/pokemon";


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { };

  getAll(){
    return this.http.get(baseUrl);
  }

  getByUrl(url:string){
    return this.http.get(url);
  }

  getById(id:any){
    return this.http.get(`${baseUrl}/${id}`);
  }

  getUrlByName(name:string){
    return this.http.get(`${baseUrl}/${name}`);
  }
}
