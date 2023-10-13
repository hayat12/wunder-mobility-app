import { createReducer, on } from '@ngrx/store';
import { Personal } from 'src/app/interface/personal.interface';
import { setPersonalInfo } from '../actions/personal-information.actions';

export const initialState: Personal = {
  firstName: '',
  lastName: '',
  telephone: '',
};

export const personalInformationReducer = createReducer(
  initialState,
  on(setPersonalInfo, (state, { firstName, lastName, telephone }) => {
    console.log("called this method", state);
    return ({
      ...state,
      firstName,
      lastName,
      telephone,
    })
  }
  )
);
