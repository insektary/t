import {createReducer, on} from '@ngrx/store';
import {setEditableCourse} from '../actions/courses';
import {Course} from '../../interfaces/course';

export const initialState = {};

const _editableCourseReducer = createReducer(initialState,
    on(setEditableCourse, (state, {payload}) => payload),
);

export function editableCourseReducer(state: Course, action) {
    return _editableCourseReducer(state, action);
}
