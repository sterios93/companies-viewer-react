import projects from '../../data/projects.json';
import * as actionTypes from './actionTypes';

export const saveProjects = payload => {
  return {
    type: actionTypes.SAVE_PROJECTS,
    payload
  }
}

export const getProjects = () => {
  return dispatch => {
    // TODO:: move that async call to a server call
    setTimeout(() => dispatch(saveProjects(projects)), 2000);
  }
}

export const toggleModal = payload => {
  return {
    type: actionTypes.TOGGLE_PROJECTS_MODAL,
    value: payload.value,
  }
}

export const setActiveProject = payload => {
  return {
    type: actionTypes.SET_ACTIVE_PROJECT,
    id: payload.id
  }
}

export const updateProjectName = payload => {
  // TODO:: make this async server call
  return {
    type: actionTypes.UPDATE_PROJECT_NAME,
    name: payload.name
  }
}

export const updateProjectDepartment = payload => {
  // TODO:: make this async server call
  return {
    type: actionTypes.UPDATE_PROJECT_DEPARTMENT,
    department: payload.department
  }
}

export const addEmployeeToProject = payload => {
  return {
    type: actionTypes.ADD_EMPLOYEE_TO_PROJECT,
    id: payload.id
  }
}
export const removeEmployeeFromProject = payload => {
  return {
    type: actionTypes.REMOVE_EMPLOYEE_FROM_PROJECT,
    id: payload.id
  }
}