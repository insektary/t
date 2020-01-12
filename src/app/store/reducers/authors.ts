import {createReducer, on} from '@ngrx/store';
import {putAuthorsToStore} from '../actions/authors';
import {AuthorType} from '../../interfaces/course';

export const initialState = [];

const _authorsReducer = createReducer(initialState,
    on(putAuthorsToStore, (state, {payload}) => payload),
);

export function authorsReducer(state: AuthorType[], action) {
    return _authorsReducer(state, action);
}
