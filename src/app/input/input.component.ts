import {Component, OnInit, Input, Output, DoCheck, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit, DoCheck {

    @Input() public placeholder: string;
    @Output() private onchange: EventEmitter<string> = new EventEmitter();
    private value: string;

    constructor() {
        this.value = '';
    }

    ngOnInit() {
    }

    ngDoCheck() {
        this.onchange.emit(this.value);
    }

}
