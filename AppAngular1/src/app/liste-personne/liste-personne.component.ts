import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/Personne.model';
import { PersonneServiceService } from '../service/personne-service.service';

@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.component.html',
  styleUrls: ['./liste-personne.component.scss']
})
export class ListePersonneComponent implements OnInit {

  personnes!:Personne[];
 
    
  constructor(private service:PersonneServiceService) { }

  ngOnInit(): void {

  this.personnes=this.service.getAllPersonne();
   
  }

}
