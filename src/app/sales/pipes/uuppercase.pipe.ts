import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'uupercase'
})
export class UuppePipe implements PipeTransform{

    transform(value: string, uuperCase: boolean = true): string {
        return ( uuperCase ) ? value.toUpperCase() : value.toLowerCase();
    }
}