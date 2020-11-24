import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  //Els serveis s'injecten a traves del constructor de la classe.
  //El servei "Router" ens permet navegar entre els diferents component de l'aplicació 
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  //Propietat que representa el conjunt de camps del formulari 
  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }]
    });
  }

  guardarCambios(){
    // ... guardarà els canvis. Això és comunicarà amb el webApi. Això ho farem més endavant
    //Amb "router.navigate" anem al component que volem
    this.router.navigate(['/generos']);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
      return 'El campo nombre es requerido'
    }

    if(campo.hasError('minlength')){
      return 'La longitud mínima es de 3 caracteres'
    }
    return '';
  }

}
