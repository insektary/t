import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
import * as moment from 'moment';

const TWO_WEEKS_DURATION = 1209600000;

@Directive({
    selector: '[appBorderGreen]'
})
export class BorderGreenDirective implements OnChanges {

    @Input() public date: string;

    constructor(private elementRef: ElementRef) {
    }

    ngOnChanges() {
        const currentDate = moment();
        const date = moment(this.date);
        const interval = moment(currentDate).diff(date);

        if (currentDate.isAfter(date) && interval < TWO_WEEKS_DURATION) {
            this.elementRef.nativeElement.style.border = 'solid 1px greenyellow';
        } else if (currentDate.isBefore(date)) {
            this.elementRef.nativeElement.style.border = 'solid 1px skyblue';
        }
    }
}
