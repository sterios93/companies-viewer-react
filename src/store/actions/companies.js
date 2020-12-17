import companies from '../../data/companies.json';
import companiesAddresses from '../../data/company-addresses.json';
import * as actionTypes from './actionTypes';

export const saveCompanies = (payload) => {
  return {
      type: actionTypes.SAVE_COMPANIES,
      payload
  }
}

export const getCompanies = () => {
  return dispatch => {
    // TODO:: move that async call to a server call
    dispatch(startCompaniesLoading());
    setTimeout(() => {
      dispatch(saveCompanies(companies));
      dispatch(doneCompaniesLoading());
    }, 2000);
  }
}

export const setActiveCompany = payload => {
  return {
    type: actionTypes.SET_ACTIVE_COMPANY,
    id: payload.id,
  }
}

export const getCompaniesAddresses = () => {
  return dispatch => {
    // TODO:: move that async call to a server call
    setTimeout(() => dispatch(saveCompaniesAddresses(companiesAddresses)), 2000);
  }
}

export const saveCompaniesAddresses = (payload) => {
  return {
    type: actionTypes.SAVE_COMPANIES_ADDRESSES,
    payload,
  }
}

export const startCompaniesLoading = () => {
  return {
    type: actionTypes.COMPANIES_LOADING_START
  }
}

export const doneCompaniesLoading = () => {
  return {
    type: actionTypes.COMPANIES_LOADING_DONE
  }
}
