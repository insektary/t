import {createReducer, on} from '@ngrx/store';
import {setAuthData} from '../actions/authData';
import {UserName} from '../../interfaces/authData';

export const initialState = {};

const _authDataReducer = createReducer(initialState,
    on(setAuthData, (state, {payload}) => payload),
);

export function authDataReducer(state: UserName, action) {
    return _authDataReducer(state, action);
}
