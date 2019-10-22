import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {

    @Input() public placeholder: string;

    constructor() {
        this.placeholder = 'Text to search'
    }

    ngOnInit() {
    }

}
