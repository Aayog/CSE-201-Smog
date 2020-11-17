import { Pipe, PipeTransform } from '@angular/core';
//http://www.angulartutorial.net/2017/03/simple-search-using-pipe-in-angular-2.html

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