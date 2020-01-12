import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Course, CreateCourseType, UpdateCourseType} from 'src/app/interfaces/course';
import {LoaderService} from './loader.service';
import {putCoursesToStore, setEditableCourse} from './store/actions/courses';
import {AppState} from './interfaces/store';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    public editableCourse: Course;
    public count: number;

    constructor(private http: HttpClient, public loaderService: LoaderService, public store: Store<AppState>) {
        this.count = 10;
    }

    increaseCount(count: number) {
        this.count = this.count + count;
    }

    resetCount() {
        this.count = 10;
    }

    fetchData(textFragment: string = ''): void {
        this.http.get(`api/courses?textFragment=${textFragment}`, {reportProgress: true})
            .subscribe((data: Course[]) => {
                this.store.dispatch(putCoursesToStore({payload: data}));
            });
    }

    fetchCourseById(id: number): void {
        this.http.get(`api/courses/${id}`, {reportProgress: true})
            .subscribe((data: Course) => {
                this.store.dispatch(setEditableCourse({payload: data}));
            });
    }

    deleteCourse(id: number): Promise<void> {
        return new Promise((res, rej) => {
            this.http.delete(`api/courses/${id}`).subscribe(() => res());
        });
    }

    createCourse({
        name,
        date,
        description,
        length
    }: CreateCourseType): Promise<void> {
        return new Promise((res, rej) => {
            this.http.post('api/courses', {
                name,
                date,
                description,
                length
            }).subscribe(() => res());
        });
    }

    updateCourse({
        id,
        name,
        date,
        description,
        length
    }: UpdateCourseType): Promise<void> {
        return new Promise((res, rej) => {
            this.http.patch(`api/courses/${id}`, {
                name,
                date,
                description,
                length
            }).subscribe(() => res());
        });
    }
}
