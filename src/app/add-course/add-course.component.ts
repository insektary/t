import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {CoursesService} from '../courses.service';
import {LoaderService} from '../loader.service';
import {getEditableCourse} from '../store/selectors/selectors';
import {AppState} from '../interfaces/store';
import {AuthorType} from '../interfaces/course';
import * as moment from 'moment';

interface FormValuesType {
    name: string;
    description: string;
    date: string;
    length: number;
    authors: AuthorType[];
}

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {

    public routeId?: string;
    public form: FormGroup;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public coursesService: CoursesService,
        public loaderService: LoaderService,
        public store: Store<AppState>,
        private fb: FormBuilder
    ) {
        this.routeId = route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.initForm();
        if (!this.routeId) {
            return;
        }

        this.coursesService.fetchCourseById(Number(this.routeId));
        this.store.pipe(select(getEditableCourse)).subscribe((data) => this.initForm(data), () => this.router.navigate(['/404']));
    }

    initForm(values?: FormValuesType) {
        this.form = this.fb.group({
            name: [
                values ? values.name : '',
                [
                    Validators.required,
                    Validators.maxLength(50)
                ]
            ],
            description: [
                values ? values.description : '',
                [
                    Validators.required,
                    Validators.maxLength(500)
                ]
            ],
            date: [
                values ? values.date : '',
                [
                    Validators.required,
                    ({value}: {value: string}) => {
                        if (moment(value).isValid()) {
                            return null;
                        }

                        return {
                            invalidPattern: true
                        };
                    }
                ]
            ],
            length: [
                values ? values.length : null,
                [
                    Validators.required,
                    ({value}: {value: string}) => {
                        if (!isNaN(Number(value))) {
                            return null;
                        }

                        return {
                            invalidPattern: true
                        };
                    }
                ]
            ],
            authors: [
                values ? values.authors : [],
                [
                    ({value}: {value: AuthorType[]}) => {
                        if (value && value.length) {
                            return null;
                        }

                        return {
                            isEmpty: true
                        };
                    }
                ]
            ]
        });
    }

    onCancel() {
        this.router.navigate(['/courses']);
    }

    onSubmit() {
        if (!this.routeId) {
            this.coursesService.createCourse(this.form.value)
                .then(() => this.router.navigate(['/courses']));
        } else {
            this.coursesService.updateCourse({...this.form.value, id: Number(this.routeId)})
                .then(() => this.router.navigate(['/courses']));
        }
    }
}
