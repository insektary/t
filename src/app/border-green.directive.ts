import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
import * as moment from 'moment';

const TWO_WEEKS_DURATION = 1209600000;

@Directive({
    selector: '[appBorderGreen]'
})
export class BorderGreenDirective implements OnChanges {

    @Input() public startDate: string;

    constructor(private elementRef: ElementRef) {
    }

    ngOnChanges() {
        const currentDate = moment();
        const startDate = moment(this.startDate);
        const interval = moment(currentDate).diff(startDate);

        if (currentDate.isAfter(startDate) && interval < TWO_WEEKS_DURATION) {
            this.elementRef.nativeElement.style.border = "solid 1px greenyellow";
        } else if (currentDate.isBefore(startDate)) {
            this.elementRef.nativeElement.style.border = "solid 1px skyblue";
        }
    }
}
