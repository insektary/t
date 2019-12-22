import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {CoursesService} from '../courses.service';
import {LoaderService} from '../loader.service';
import {getEditableCourse} from '../store/selectors/selectors';
import {Course} from '../interfaces/course';
import {AppState} from '../interfaces/store';

interface FormValuesType {
    name: string;
    description: string;
    date: string;
    length: number;
}

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {

    public routeId?: string;
    public formValues: Course = {
        id: null,
        isTopRated: false,
        creationDate: '',
        name: '',
        description: '',
        date: '',
        length: null
    };

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public coursesService: CoursesService,
        public loaderService: LoaderService,
        public store: Store<AppState>
    ) {
        this.routeId = route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        if (!this.routeId) {
            return;
        }

        this.coursesService.fetchCourseById(Number(this.routeId));
        this.store.pipe(select(getEditableCourse)).subscribe((data) => this.formValues = data);
    }

    onCancel() {
        this.router.navigate(['/courses']);
    }

    onSubmit() {
        if (!this.routeId) {
            this.coursesService.createCourse(this.formValues)
                .then(() => this.router.navigate(['/courses']));
        } else {
            this.coursesService.updateCourse({...this.formValues, id: Number(this.routeId)})
                .then(() => this.router.navigate(['/courses']));
        }
    }
}
