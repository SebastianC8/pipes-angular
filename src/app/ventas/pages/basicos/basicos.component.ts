import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'sebastián';
  nombreUpper: string = 'SEBASTIÁN';
  nombreCompleto: string = 'sEbAstIáN cOrRalEs';

  fecha: Date = new Date();

}
