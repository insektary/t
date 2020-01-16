import {Component, OnInit, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-duration-form-input',
    templateUrl: './duration-form-input.component.html',
    styleUrls: ['./duration-form-input.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DurationFormInputComponent),
            multi: true
        }
    ]
})
export class DurationFormInputComponent implements OnInit {

    @Input() public formControl = {};
    value = '';

    constructor() { }

    ngOnInit() {
    }

    writeValue(value: string) {
        this.value = value;
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
        this.onChange(value);
        this.onTouched();
    }

}
