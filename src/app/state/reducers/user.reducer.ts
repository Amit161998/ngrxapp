import { Action } from '@ngrx/store';
import { IUser } from 'src/app/model/user';
import { UserActions, UserActionTypes } from '../actions/user.actions';


export const userFeatureKey = 'usersState';

export interface State {
  users: IUser[],  //defined users datatype
  error: String
}

export const initialState: State = {
  //by default state initialization
  users: [],
  error: ''
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return {
        ...state
      }
    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        users: action.payload.data,
        error: ''
      }
    case UserActionTypes.LoadUsersFailure:
      return {
        ...state,
        users: [],
        error: action.payload.error
      }
    default:
      return state;
  }
}
