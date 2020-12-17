import * as actionTypes from '../actions/actionTypes'

const initialState = {
    companiesData: [],
    companiesAddresses: [],
    companiesLoading: false,
    activeCompanyId: null,
};

export const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_COMPANIES: {
      const companiesData = [...state.companiesData, ...action.payload];
      return { ...state, companiesData };
    }
    case actionTypes.SET_ACTIVE_COMPANY: {
      return {
        ...state,
        activeCompanyId: action.id
      };
    }
    case actionTypes.SAVE_COMPANIES_ADDRESSES: {
      const companiesAddresses = [...state.companiesAddresses, ...action.payload];
      return { ...state, companiesAddresses };
    }
    case actionTypes.COMPANIES_LOADING_START: {
      return {
        ...state,
        companiesLoading: true,
      }
    }
    case actionTypes.COMPANIES_LOADING_DONE: {
      return {
        ...state,
        companiesLoading: false,
      }
    }
    default: {
      return state;
    }
  }
};

export const getCompanyInfo = state => {
  if (!state.companies.activeCompanyId) return {};

  const companyData = state.companies.companiesData.find(c => c.id === state.companies.activeCompanyId);
  const companyAddress = state.companies.companiesAddresses.find(a => a.companyId === state.companies.activeCompanyId);

  return {
    companyData,
    companyAddress
  }
};

export const getCompaniesSelctor = state => state.companies.companiesData;

export const getActiveCompanyId = state => state.companies.activeCompanyId;

export const getCompaniesLoading = state => state.companies.companiesLoading;