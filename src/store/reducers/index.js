import { combineReducers } from 'redux'
import { companiesReducer }  from './companies';
import { projectsReducer } from './projects';
import { employeesReducer } from './employees';

const rootReducer = {
    companies: companiesReducer,
    projects: projectsReducer,
    employees: employeesReducer,
}

export default combineReducers(rootReducer)