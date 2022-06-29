import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../models/Personne.model';

@Component({
  selector: 'app-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.scss']
})
export class Composant1Component implements OnInit {


  @Input() personne!:Personne;

 


  constructor() { }

  ngOnInit(): void {

  
    
  }


 

}
