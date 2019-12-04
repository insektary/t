import {TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {CoursesService} from './courses.service';

const testList = [
    {
        id: 1,
        name: 'test',
        isTopRated: false,
        creationDate: '2019-11-04T12:37:21+0000',
        length: 40,
        date: '2019-11-04T12:37:21+0000',
        description: 'test'
    },
    {
        id: 2,
        name: 'test',
        isTopRated: false,
        creationDate: '2019-11-04T12:37:21+0000',
        length: 40,
        date: '2019-11-04T12:37:21+0000',
        description: 'test'
    }
];

const newCourse = {
    name: 'new',
    date: '2019-11-04T12:37:21+0000',
    description: 'new',
    length: 130
};

describe('CoursesService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    const testService = new CoursesService();

    beforeEach(() => {
        testService.courseList = testList;
    });

    it('should be created', () => {
        const service: CoursesService = TestBed.get(CoursesService);
        expect(service).toBeTruthy();
    });

    it('should return full list', () => {
        expect(testService.getData()).toEqual(testList);
    });

    it('should add new item', () => {
        testService.createCourse(newCourse);

        expect(testService.courseList.find(({
            name,
            date,
            description,
            length
        }) => (
            name === newCourse.name &&
            date === newCourse.date &&
            description === newCourse.description &&
            length === newCourse.length
            ))).toBeTruthy();
    });

    it('should return first item', () => {
        expect(testService.getCourseById(1)).toEqual(testList[0]);
    });

    it('should delete item', () => {
        testService.deleteCourse(1);

        expect(testService.courseList.find(({id}) => id === 1)).toBeFalsy();
    });

    it('should update item', () => {
        testService.updateCourse({id: 1, ...newCourse});

        const updatedItem = testService.courseList.find(({id}) => id === 1);
        expect(updatedItem.title).toBe(newCourse.name);
        expect(updatedItem.date).toBe(newCourse.date);
        expect(updatedItem.description).toBe(newCourse.description);
        expect(updatedItem.length).toBe(newCourse.length);
    });
});
