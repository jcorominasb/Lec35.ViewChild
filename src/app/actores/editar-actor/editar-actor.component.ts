import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  //Amb el servei "ActivatedRoute" podem llegir el parametre de la URL
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //Aqui es llegeix el paràmetre que hi ha a la URL
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
    })
  }

}
