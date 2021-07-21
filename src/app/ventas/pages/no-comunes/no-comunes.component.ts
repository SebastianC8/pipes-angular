import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  /**
   * i18nSelect
   */
  nombre: string = 'Sebastián';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  /**
   * i18nPlural
   */
  clientes: string[] = ['Maria', 'Andrés', 'Juan', 'Lucas'];

  clientesMap = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  constructor() { }

  cambiarCliente() {
    
    if (this.genero === 'masculino') {
      this.genero = 'femenino';
      this.nombre = 'Andrea';
    } else if (this.genero === 'femenino') {
      this.genero = 'masculino';
      this.nombre = 'Sebastián';
    }

  }

  borrarCliente() {
    this.clientes.pop();
  }

  /**
   * Key Value
   */
  persona = {
    nombre: 'Sebastián',
    edad: 21,
    direccion: 'Medellín, Antioquia'
  }

  /**
   * JSON pipe
   */

  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Aquaman', vuela: false },
    { nombre: 'Robin', vuela: false }
  ];

  /**
   * Async pipe
   * 
   * Solo funciona con Promesas y Observables
   * 
   * El pipe se suscribe a dicha acción y emite sus valores
   */
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa resuelta.');
    }, 1500);
  });

}
