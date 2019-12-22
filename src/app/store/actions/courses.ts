import {createAction, props} from '@ngrx/store';
import {Course} from '../../interfaces/course';

export const putCoursesToStore = createAction('[Courses Component] PutCoursesToStore', props<{payload: Course[]}>());
export const setEditableCourse = createAction('[Courses Component] SetEditableCourse', props<{payload: Course}>());
