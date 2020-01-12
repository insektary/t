import {Course, AuthorType} from './course';
import {UserName} from './authData';

export interface AppState {
    courses: Course[];
    editableCourse: Course;
    authData: UserName;
    authors: AuthorType[];
}
