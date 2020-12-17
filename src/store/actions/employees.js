import * as actionTypes from './actionTypes';
import employees from '../../data/employees.json';

export const saveEmployees = payload => {
  return {
    type: actionTypes.SAVE_EMPLOYEES,
    payload
  }
}

export const getEmployees = state => {
  return dispatch => {
    // TODO:: move that async call to a server call
    setTimeout(() => dispatch(saveEmployees(employees)), 2000);
  }
}

export const setActiveEmployee = payload => {
  return {
    type: actionTypes.SET_ACTIVE_EMPLOYEE,
    id: payload.id,
  }
}