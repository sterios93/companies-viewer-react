import React from 'react';
import CompanyDescription from './CompanyDescription/CompanyDescription';
import CompanyProjectsList from './CompanyProjectsList/CompanyProjectList';
import ModalWrapper from '../Modal/ModalWrapper';
import ProjectInfoContainer from '../ProjectInfo/ProjectInfoContainer';
import { Layout } from 'antd';
import styles from './CompanyInfoContainer.module.css';
import { useSelector } from 'react-redux';
import { getActiveCompanyId } from '../../store/reducers/companies';
const { Content } = Layout;



const CompanyInfoContainer = props => {
  const activeCompanyId = useSelector(getActiveCompanyId);

  const content = !activeCompanyId
    ? <p className={styles.noCompanySelected}>No company selected</p>
    : ( <>
        <CompanyDescription />
        <CompanyProjectsList />
      </> );
  
  return (
    <Content className={styles.Content}>
      {content}
     
      <ModalWrapper>
        <ProjectInfoContainer /> 
      </ModalWrapper>
    </Content>
  );
}

export default CompanyInfoContainer;
