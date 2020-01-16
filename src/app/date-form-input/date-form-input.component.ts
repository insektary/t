import {Component, OnInit, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import * as moment from 'moment';

@Component({
    selector: 'app-date-form-input',
    templateUrl: './date-form-input.component.html',
    styleUrls: ['./date-form-input.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateFormInputComponent),
            multi: true
        }
    ]
})
export class DateFormInputComponent implements OnInit, ControlValueAccessor {

    @Input() public name: string;
    @Input() public formControl = {};
    value = '';

    constructor() { }

    ngOnInit() {
    }

    writeValue(value: string) {
        const dateObj = moment(value);

        this.value = dateObj.isValid() ? moment(value).format('DD-MM-YYYY') : '';
    }

    onChange = (value: string) => {

    }

    onTouched = () => {

    }

    registerOnChange(fn: (value: string) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => VideoFacingModeEnum) {
        this.onTouched = fn;
    }

    updateValue(value: string) {
        this.value = value;

        const dateObj = moment(value, 'DD-MM-YYYY');

        this.onChange(dateObj.isValid() ? dateObj.format() : value);
        this.onTouched();
    }
}
