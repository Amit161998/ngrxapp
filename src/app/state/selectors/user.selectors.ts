import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/user.reducer';

const getUserFeatureState = createFeatureSelector<State>('usersState');

export const getUsers = createSelector(getUserFeatureState, state => state.users) //it will actually get the data from store / current state 
export const getError = createSelector(getUserFeatureState, state => state.error)


