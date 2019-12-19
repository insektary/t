import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Course, CreateCourseType, UpdateCourseType} from 'src/app/interfaces/course';
import {LoaderService} from './loader.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    public courseList: Course[];
    public editableCourse: Course;

    constructor(private http: HttpClient, public loaderService: LoaderService) {
        this.courseList = [];
    }

    generateId(): number {
        if (!this.courseList || this.courseList.length === 0) {
            return 1;
        }

        return (Math.max(...this.courseList.map(({id}) => id)) + 1);
    }

    subscriber = (onSuccess: (event: any) => void) => (event: any) => {
        if (event.type === HttpEventType.DownloadProgress) {
            this.loaderService.showLoader();
        }
        if (event.type === HttpEventType.Response) {
            this.loaderService.hideLoader();
            onSuccess(event);
        }
    }

    fetchData(textFragment: string = '') {
        this.http.get(`api/courses?textFragment=${textFragment}`, {reportProgress: true, observe: 'events'})
            .subscribe(this.subscriber((event) => this.courseList = event.body));
    }

    getData(): Course[] {
        return this.courseList;
    }

    fetchCourseById(id: number): Observable<any> {
        return this.http.get(`api/courses/${id}`, {reportProgress: true, observe: 'events'});
    }

    getCourseById(foundedId: number): Course {
        return this.courseList.find(({id}) => id === foundedId);
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
