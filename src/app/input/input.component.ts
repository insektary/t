import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {

    @Input() public placeholder: string = '';
    @Input() public type: string = '';
    @Input() public withLens: boolean;
    @Input() public isLong: boolean = false;
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
