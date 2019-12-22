import {createSelector} from '@ngrx/store';
import {AppState} from '../../interfaces/store';

const _getCourses = (state: AppState) => state.courses;

export const getCourses = createSelector(
    _getCourses,
    (courses) => courses
);

const _getEditableCourse = (state: AppState) => state.editableCourse;

export const getEditableCourse = createSelector(
    _getEditableCourse,
    (editableCourse) => editableCourse
);

const _getAuthData = (state: AppState) => state.authData;

export const getAuthData = createSelector(
    _getAuthData,
    (authData) => authData
);

