import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    'name': 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(valor: string, mayusculas: boolean = true): string {
        return (!mayusculas) ? valor.toLowerCase() : valor.toUpperCase();
    }

}