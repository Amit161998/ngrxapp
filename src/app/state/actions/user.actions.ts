import { Action } from '@ngrx/store';
import { IUser } from 'src/app/model/user';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailure = '[User] Load Users Failure',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers; //load users will call api
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: { data: IUser[] }) { }  //jo bhi data hai load users sucess mein aayega yaha se handle hoga sucess scenario
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: { error: String }) { }   //jo bhi aayega error yaha pe aayega on load user failure
}

export type UserActions = LoadUsers | LoadUsersSuccess | LoadUsersFailure;

