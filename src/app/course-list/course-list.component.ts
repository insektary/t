import {Component, OnInit, Input} from '@angular/core';
import {Course} from 'src/app/interfaces/course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.less']
})
export class CourseListComponent implements OnInit {

    @Input() public courseList: Course[];

    constructor() {
        this.courseList = [
            {
                id: 1,
                title: 'Video course 1. Name tag',
                isFavorite: false,
                creationDate: 'Mon Nov 25 2019 12:32:41 GMT+0300',
                duration: '60h 28m',
                startDate: '9 Nov, 2019',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 1,
                title: 'Video course 1. Name tag',
                isFavorite: true,
                creationDate: 'Sun Nov 10 2019 12:32:41 GMT+0300',
                duration: '60h 28m',
                startDate: '9 Nov, 2019',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 2,
                title: 'Video course 1. Name tag',
                isFavorite: false,
                creationDate: 'Mon Nov 4 2019 12:32:41 GMT+0300',
                duration: '60h 28m',
                startDate: '9 Nov, 2019',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 3,
                title: 'Video course 1. Name tag',
                isFavorite: false,
                creationDate: 'Mon Oct 21 2019 12:32:41 GMT+0300',
                duration: '60h 28m',
                startDate: '9 Nov, 2019',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 4,
                title: 'Video course 1. Name tag',
                isFavorite: false,
                creationDate: 'Mon Oct 21 2019 12:32:41 GMT+0300',
                duration: '60h 28m',
                startDate: '9 Nov, 2019',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 5,
                title: 'Video course 1. Name tag',
                isFavorite: false,
                creationDate: 'Mon Oct 21 2019 12:32:41 GMT+0300',
                duration: '60h 28m',
                startDate: '9 Nov, 2019',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 6,
                title: 'Video course 1. Name tag',
                isFavorite: false,
                creationDate: 'Mon Oct 21 2019 12:32:41 GMT+0300',
                duration: '60h 28m',
                startDate: '9 Nov, 2019',
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
