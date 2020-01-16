import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'durationFormatter'
})
export class DurationFormatterPipe implements PipeTransform {

    transform(value: number): string {
        if (!value || isNaN(value)) {
            return '';
        }

        if (value < 60) {
            return `${String(value)} m`;
        }

        const integerPart = value / 60;
        const decimalPart = value % 60;

        return `${String(Math.round(integerPart))} h ${decimalPart ? `${String(decimalPart)} m` : ''}`;
    }

}
