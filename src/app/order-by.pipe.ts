import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import {Course} from './interfaces/course';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform(value: Course[]): Course[] {
        return value.sort(({creationDate: a}, {creationDate: b}) => moment(b).diff(moment(a)));
    }

}
