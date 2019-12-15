import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import {Course} from '../interfaces/course';

@Component({
    selector: 'app-course-view',
    templateUrl: './course-view.component.html',
    styleUrls: ['./course-view.component.less']
})
export class CourseViewComponent implements OnInit {

    public routeId?: string;
    public course: Course;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public coursesService: CoursesService
    ) {
        this.routeId = route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.course = this.coursesService.getCourseById(Number(this.routeId));
    }

}
