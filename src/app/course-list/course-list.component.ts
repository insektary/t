import {Component, OnInit, Input} from '@angular/core';
import {Course} from 'src/app/interfaces/course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.less']
})
export class CourseListComponent implements OnInit {


    @Input() public filter$: string;
    @Input() public courseList: Course[];

    constructor() {
        this.courseList = [
            {
                id: 1,
                title: 'Angular',
                isFavorite: false,
                creationDate: 'Fri Nov 1 2019 12:32:41 GMT+0300',
                duration: 45,
                startDate: 'Mon Nov 25 2019 12:32:41 GMT+0300',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 1,
                title: 'React',
                isFavorite: true,
                creationDate: 'Fri Nov 29 2019 12:32:41 GMT+0300',
                duration: 45,
                startDate: 'Mon Nov 25 2019 12:32:41 GMT+0300',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 2,
                title: 'NodeJS',
                isFavorite: false,
                creationDate: 'Mon Nov 18 2019 12:32:41 GMT+0300',
                duration: 120,
                startDate: 'Mon Nov 18 2019 12:32:41 GMT+0300',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 3,
                title: 'Vue',
                isFavorite: false,
                creationDate: 'Mon Oct 7 2019 12:32:41 GMT+0300',
                duration: 60,
                startDate: 'Mon Nov 25 2019 12:32:41 GMT+0300',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 4,
                title: 'Python',
                isFavorite: false,
                creationDate: 'Mon Oct 21 2019 12:32:41 GMT+0300',
                duration: 150,
                startDate: 'Mon Nov 25 2019 12:32:41 GMT+0300',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 5,
                title: 'Java',
                isFavorite: false,
                creationDate: 'Mon Oct 21 2019 12:32:41 GMT+0300',
                duration: 250,
                startDate: 'Mon Nov 25 2019 12:32:41 GMT+0300',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 6,
                title: '.NET',
                isFavorite: false,
                creationDate: 'Mon Oct 21 2019 12:32:41 GMT+0300',
                duration: 130,
                startDate: 'Mon Nov 25 2019 12:32:41 GMT+0300',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        ];
    }

    ngOnInit() {
    }

    deleteCourse(id: number) {
        console.log(`Course with id=${id} was deleted`);
    }

    addCourse() {
        console.log('New course was added');
    }

}
