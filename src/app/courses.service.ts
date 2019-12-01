import {Injectable} from '@angular/core';
import {Course, CreateCourseType, UpdateCourseType} from 'src/app/interfaces/course';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    public courseList: Course[];

    constructor() {
        this.courseList = [
            {
                id: 1,
                title: 'Angular',
                isFavorite: false,
                creationDate: '2019-11-04T12:37:21+0000',
                duration: 45,
                startDate: '2019-11-23T12:37:21+0000',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 1,
                title: 'React',
                isFavorite: true,
                creationDate: '2019-11-07T12:37:21+0000',
                duration: 45,
                startDate: '2019-11-24T12:37:21+0000',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 2,
                title: 'NodeJS',
                isFavorite: false,
                creationDate: '2019-11-01T12:37:21+0000',
                duration: 120,
                startDate: '2019-11-30T12:37:21+0000',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 3,
                title: 'Vue',
                isFavorite: false,
                creationDate: '2019-11-10T12:37:21+0000',
                duration: 60,
                startDate: '2019-12-04T12:37:21+0000',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 4,
                title: 'Python',
                isFavorite: false,
                creationDate: '2019-11-09T12:37:21+0000',
                duration: 150,
                startDate: '2019-12-09T12:37:21+0000',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 5,
                title: 'Java',
                isFavorite: false,
                creationDate: '2019-11-012T12:37:21+0000',
                duration: 250,
                startDate: '2019-12-14T12:37:21+0000',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 6,
                title: '.NET',
                isFavorite: false,
                creationDate: '2019-11-14T12:37:21+0000',
                duration: 130,
                startDate: '2019-12-25T12:37:21+0000',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        ];
    }

    generateId(): number {
        if (!this.courseList || this.courseList.length === 0) {
            return 1;
        }

        return (Math.max(...this.courseList.map(({id}) => id)) + 1);
    }

    getData(): Course[] {
        return this.courseList;
    }

    createCourse({
        title,
        startDate,
        description,
        duration
    }: CreateCourseType): void {
        this.courseList.push({
            id: this.generateId(),
            title,
            isFavorite: false,
            creationDate: moment().format(),
            duration,
            startDate,
            description
        });
    }

    getCourseById(foundedId: number): Course {
        return this.courseList.find(({id}) => id === foundedId);
    }

    updateCourse({
        id,
        title,
        startDate,
        description,
        duration
    }: UpdateCourseType): void {
        this.courseList = this.courseList.map((course) => {
            if (course.id === id) {
                return {
                    ...course,
                    title,
                    startDate,
                    description,
                    duration
                };
            }

            return course;
        });
    }

    deleteCourse(foundedId: number): void {
        this.courseList = this.courseList.filter(({id}) => id !== foundedId);
    }
}
