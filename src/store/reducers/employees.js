import * as actionTypes from '../actions/actionTypes'

const initialState = {
  employeesData: [],
  activeEmployeeId: null,
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_EMPLOYEES: {
      const employeesData = [...state.employeesData, ...action.payload];
      return { ...state, employeesData };
    }
    case actionTypes.SET_ACTIVE_EMPLOYEE: {
      return {
        ...state,
        activeEmployeeId: action.id
      };
    }
    default: {
        return state;
    }
  }
};

export const getEmployees = state => state.employees.employeesData;

export const getEmployeeData = state => {
  const { activeEmployeeId, employeesData } = state.employees;
  if (!activeEmployeeId) return null;

  const employee = employeesData.find(e => e.id === activeEmployeeId);
  return employee;
}

export const getActiveEmployeeId = state => state.employees.activeEmployeeId;