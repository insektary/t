import {Component, OnInit, Input} from '@angular/core';

enum Sizes {
    'BIG',
    'MEDIUM',
    'SMALL'
}

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

    @Input() public title: string;
    @Input() public size: string;
    @Input() public color: string;
    @Input() public onClick: Function;

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        const {onClick} = this;

        if (onClick) {
            onClick();
        }
    }

}
