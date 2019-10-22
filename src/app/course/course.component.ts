import {Component, OnInit, Input} from '@angular/core';
import {Course} from 'src/app/models/course';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {

    @Input() public item: Course;

    constructor() {

    }

    ngOnInit() {
    }

}
