import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

enum Sizes {
    'BIG',
    'MEDIUM',
    'SMALL'
}

enum Colors {
    'GREEN',
    'BLUE'
}

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

    @Input() public title: string;
    @Input() public size: Sizes = Sizes.MEDIUM;
    @Input() public color: Colors = Colors.GREEN;
    @Output() public onclick: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        this.onclick.emit();
    }

}
