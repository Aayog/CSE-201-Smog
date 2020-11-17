import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'GameFilterPipe',
})

export class GameFilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                console.log(el['Title']);
                return el['Title'].toLowerCase().includes(input);
            })
        }
        return value;
    }
}