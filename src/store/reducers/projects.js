import * as actionTypes from '../actions/actionTypes';

const initialState = {
  projectsData: [],
  activeProjectId: null,
  isProjectModalOpen: false,
}

export const projectsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SAVE_PROJECTS: {
      const projectsData = [...state.projectsData, ...action.payload];
      return { ...state, projectsData };
    }
    case actionTypes.TOGGLE_PROJECTS_MODAL: {
      return {
        ...state,
        isProjectModalOpen: action.value
      }
    }
    case actionTypes.SET_ACTIVE_PROJECT: {
      return {
        ...state,
        activeProjectId: action.id
      }
    }
    case actionTypes.UPDATE_PROJECT_NAME: {
      return {
        ...state,
        projectsData: state.projectsData.map(item => {
          if (item.id !== state.activeProjectId) return item;

          return {
            ...item,
            name: action.name
          };
        })
      }
    }    
    case actionTypes.UPDATE_PROJECT_DEPARTMENT: {
      return {
        ...state,
        projectsData: state.projectsData.map(item => {
          if (item.id !== state.activeProjectId) return item;

          return {
            ...item,
            department: action.department
          };
        })
      }
    }
    case actionTypes.ADD_EMPLOYEE_TO_PROJECT: {
      return {
        ...state,
        projectsData: state.projectsData.map(item => {
          if (item.id !== state.activeProjectId) return item;

          return {
            ...item,
            employeesId: [
              ...item.employeesId,
              action.id
            ]
          };
        })
      }
    }    
    case actionTypes.REMOVE_EMPLOYEE_FROM_PROJECT: {
      return {
        ...state,
        projectsData: state.projectsData.map(item => {
          if (item.id !== state.activeProjectId) return item;

          return {
            ...item,
            employeesId: item.employeesId.filter(id => id !== action.id),
          };
        })
      }
    }
    default: {
      return state;
    }
  }
}

export const getProjectsSelector = state => {
  if (!state.companies.activeCompanyId) return [];

  const companyProjects = state.projects.projectsData.filter(p => p.companyId === state.companies.activeCompanyId);
  return companyProjects;
}

export const isProjectModalOpen = state => {
  return state.projects.isProjectModalOpen;
}

export const getProjectSelector = state => {
  const { activeProjectId, projectsData } = state.projects;
  if (!activeProjectId) return null;

  const project = projectsData.find(p => p.id === activeProjectId);
  return project;
}

export const getAllProjects = state => {
  return state.projects.projectsData;
}
