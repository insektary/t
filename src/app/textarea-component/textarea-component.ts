import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-form-textarea',
    templateUrl: './textarea-component.html',
    styleUrls: ['./textarea-component.less']
})
export class TextareaComponent implements OnInit {

    @Input() public form: FormGroup;
    @Input() public name: string;

    constructor() {

    }

    ngOnInit() {
    }
}
