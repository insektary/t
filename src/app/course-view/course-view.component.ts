import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {CoursesService} from '../courses.service';
import {LoaderService} from '../loader.service';
import {Course} from '../interfaces/course';
import {getEditableCourse} from '../store/selectors/selectors';
import {AppState} from '../interfaces/store';

@Component({
    selector: 'app-course-view',
    templateUrl: './course-view.component.html',
    styleUrls: ['./course-view.component.less']
})
export class CourseViewComponent implements OnInit {

    public routeId?: string;
    public course$: Observable<Course>;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public coursesService: CoursesService,
        public store: Store<AppState>,
        public loaderService: LoaderService
    ) {
        this.routeId = route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.coursesService.fetchCourseById(Number(this.routeId));
        this.course$ = this.store.pipe(select(getEditableCourse));
    }

}
