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
    public course: Course = {
        id: null,
        name: '',
        isTopRated: false,
        creationDate: '',
        length: null,
        date: '',
        description: ''
    };

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public coursesService: CoursesService
    ) {
        this.routeId = route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.coursesService.fetchCourseById(Number(this.routeId))
            .then((course) => this.course = course);
    }

}
