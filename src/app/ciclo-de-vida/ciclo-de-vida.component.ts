import { AfterViewInit, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  constructor() {}

  @Input()
  titulo: string;

  /* Error en el docorador @ViewChild */
  /* @ViewChild(RatingComponent)
  ratingComponent: RatingComponent; */

  /* Diferents "eventos" del cicle de vida de un component */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }
  ngDoCheck(): void {
    console.log('do check');
  }
  ngAfterViewInit(): void {
    console.log('on after view init');
  }

  ngOnInit() {
    console.log('on init');
  }

}
