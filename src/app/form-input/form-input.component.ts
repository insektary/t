import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.less']
})
export class FormInputComponent implements OnInit {

    @Input() public form: FormGroup;
    @Input() public name: string;
    @Input() public isLong = false;
    @Input() public type = 'text';

    constructor() { }

    ngOnInit() {

    }

}
