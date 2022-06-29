import { Injectable } from '@angular/core';
import { Personne } from '../models/Personne.model';

@Injectable({
  providedIn: 'root'
})
export class PersonneServiceService {

  personnes:Personne[]=[
  new Personne("Bob1","Prenom1"),
  new Personne("Bob2","Prenom2"),
  new Personne("Bob3","Prenom3")

  ]
  
  constructor() { }


  getAllPersonne():Personne[]
  {
    return this.personnes;
  }



}
