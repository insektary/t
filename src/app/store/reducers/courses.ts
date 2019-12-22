import {createReducer, on} from '@ngrx/store';
import {putCoursesToStore} from '../actions/courses';
import {Course} from '../../interfaces/course';

export const initialState = [];

const _coursesReducer = createReducer(initialState,
    on(putCoursesToStore, (state, {payload}) => payload),
);

export function coursesReducer(state: Course[], action) {
    return _coursesReducer(state, action);
}
