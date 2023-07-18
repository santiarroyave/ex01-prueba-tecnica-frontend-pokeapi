import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { };

  getAll(){
    return this.http.get(baseUrl);
  }

  getById(id:any){
    return this.http.get(`${baseUrl}/${id}`);
  }
  
  getByUrl(url:string){
    // return this.http.get(`${baseUrl}/${id}`);
    return this.http.get(url);
  }
}
