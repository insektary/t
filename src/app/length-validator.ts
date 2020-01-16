import {Directive} from '@angular/core';
import {NG_VALIDATORS, ValidationErrors, Validator, FormControl} from '@angular/forms';

@Directive({
    selector: '[appLengthValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: LengthValidator,
            multi: true
        }
    ]
})
export class LengthValidator implements Validator {

    constructor() { }

    static validateLength(length: number) {
        return (control: FormControl): ValidationErrors => {
            if (control.value.length > length) {
                return {maxlength: true};
            }
        };
    }

    validate(control: FormControl): ValidationErrors | null {
        return LengthValidator.validateLength(length)(control);
    }
}
