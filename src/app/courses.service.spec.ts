import {TestBed} from '@angular/core/testing';
import {CoursesService} from './courses.service';

const testList = [
    {
        id: 1,
        title: 'test',
        isFavorite: false,
        creationDate: '2019-11-04T12:37:21+0000',
        duration: 40,
        startDate: '2019-11-04T12:37:21+0000',
        description: 'test'
    },
    {
        id: 2,
        title: 'test',
        isFavorite: false,
        creationDate: '2019-11-04T12:37:21+0000',
        duration: 40,
        startDate: '2019-11-04T12:37:21+0000',
        description: 'test'
    }
];

const newCourse = {
    title: 'new',
    startDate: '2019-11-04T12:37:21+0000',
    description: 'new',
    duration: 130
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
            title,
            startDate,
            description,
            duration
        }) => (
            title === newCourse.title &&
            startDate === newCourse.startDate &&
            description === newCourse.description &&
            duration === newCourse.duration
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
        expect(updatedItem.title).toBe(newCourse.title);
        expect(updatedItem.startDate).toBe(newCourse.startDate);
        expect(updatedItem.description).toBe(newCourse.description);
        expect(updatedItem.duration).toBe(newCourse.duration);
    });
});
