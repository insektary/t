import {Pipe, PipeTransform} from '@angular/core';
import {AuthorType} from './interfaces/course';

@Pipe({
    name: 'filterAuthors'
})
export class FilterAuthorsPipe implements PipeTransform {

    transform(list: AuthorType[], chosenFilter: string) {
        return list.filter((todo) =>
            todo.name.toLowerCase().includes(chosenFilter.toLowerCase()) ||
            todo.lastName.toLowerCase().includes(chosenFilter.toLowerCase()));
    }

}
