import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {

    @Input() public placeholder: string;
    @Input() public withLens: boolean;
    @Output() public onchange: EventEmitter<string> = new EventEmitter();
    public value: string;

    constructor() {
        this.value = '';
    }

    ngOnInit() {
    }

    valueChange(value) {
        this.value = value;
        this.onchange.emit(this.value);
    }

}
