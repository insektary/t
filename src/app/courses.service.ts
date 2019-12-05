import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course, CreateCourseType, UpdateCourseType} from 'src/app/interfaces/course';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    public courseList: Course[];
    public editableCourse: Course;

    constructor(private http: HttpClient) {
        this.courseList = [];
    }

    generateId(): number {
        if (!this.courseList || this.courseList.length === 0) {
            return 1;
        }

        return (Math.max(...this.courseList.map(({id}) => id)) + 1);
    }
    
    fetchData() {
        this.http.get('api/courses').subscribe((data: Course[]) => this.courseList = data);
    }

    getData(): Course[] {
        return this.courseList;
    }

    getCourseById(id: number): Promise<Course> {
        return new Promise((res, rej) => {
            this.http.get(`api/courses/${id}`).subscribe((data: Course) => {
                if (data && data.length) {
                    res(data);
                } else {
                    rej();
                }
            });
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
