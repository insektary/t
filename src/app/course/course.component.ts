import {Component, OnInit, Input} from '@angular/core';
import {Course} from 'src/app/interfaces/course';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit, Course {

    @Input() public id: number;
    @Input() public title: string;
    @Input() public creationDate: string;
    @Input() public duration: string;
    @Input() public description: string;

    constructor() {

    }

    ngOnInit() {
    }

}
