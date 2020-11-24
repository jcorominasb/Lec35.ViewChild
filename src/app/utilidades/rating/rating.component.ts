import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  maximoRatingArr = [];
  votado = false;
  ratingAnterior;

  constructor() { }

  /* Per inicialitzar component */
  ngOnInit() {
    /* Omplim el array de 5 element de moment amb 0 */
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index: number): void{
    this.ratingSeleccionado = index +1;
  }

  manejarMouseLeave(){
    if (this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    } else {
      this.ratingSeleccionado = 0;
    }
  }
    
  rate(index: number): void{
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }

}
