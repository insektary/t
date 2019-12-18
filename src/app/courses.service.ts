import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course, CreateCourseType, UpdateCourseType} from 'src/app/interfaces/course';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    public courseList: Course[];
    public editableCourse: Course;
    public count: number;

    constructor(private http: HttpClient) {
        this.courseList = [];
        this.count = 10;
    }

    increaseCount(count: number) {
        this.count = this.count + count;
    }

    generateId(): number {
        if (!this.courseList || this.courseList.length === 0) {
            return 1;
        }

        return (Math.max(...this.courseList.map(({id}) => id)) + 1);
    }

    fetchData(textFragment: string = '') {
        this.http.get(`api/courses?count=${this.count || ''}&textFragment=${textFragment}`)
            .subscribe((data: Course[]) => this.courseList = data);
    }

    getData(): Course[] {
        return this.courseList;
    }

    fetchCourseById(id: number): Promise<Course> {
        return new Promise((res, rej) => {
            this.http.get(`api/courses/${id}`).subscribe((data: Course) => {
                if (data && data.length) {
                    this.editableCourse = data;
                    res(data);
                } else {
                    rej();
                }
            });
        });
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
