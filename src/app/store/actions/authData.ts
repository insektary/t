import {createAction, props} from '@ngrx/store';
import {UserName} from '../../interfaces/authData';

export const setAuthData = createAction('[Auth Component] SetAuthData', props<{payload: UserName}>());
