import {Pipe, PipeTransform} from '@angular/core';
import {Course} from './interfaces/course';

@Pipe({
  	name: 'filter'
})
export class FilterPipe implements PipeTransform {

	transform(list: Course[], chosenFilter: string) {
		return list.filter((todo) => todo.title.includes(chosenFilter));
	}

}

