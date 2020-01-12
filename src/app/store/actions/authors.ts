import {createAction, props} from '@ngrx/store';
import {AuthorType} from '../../interfaces/course';

export const putAuthorsToStore = createAction('[Authors Component] PutAuthorsToStore', props<{payload: AuthorType[]}>());
