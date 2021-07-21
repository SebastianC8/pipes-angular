import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayus: boolean = true;
  orderBy: string = '';

  heroes: Heroe[] = [
    { nombre: 'Superman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Robin', vuela: false, color: Color.verde },
    { nombre: 'Daredvil', vuela: false, color: Color.rojo },
    { nombre: 'Linterna verde', vuela: true, color: Color.verde },
  ];

  cambiarMayuscula() {
    this.enMayus = !this.enMayus;
  }

  cambiarOrden(valor: string) {
    this.orderBy = valor;
  }

}
