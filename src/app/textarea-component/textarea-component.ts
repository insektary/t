import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea-component.html',
    styleUrls: ['./textarea-component.less']
})
export class TextareaComponent implements OnInit {

    @Input() public value: string;
    @Output() public valueChange: EventEmitter<string> = new EventEmitter();

    constructor() {

    }

    ngOnInit() {
    }

    updateValue(value: string) {
        this.valueChange.emit(value);
    }
}
