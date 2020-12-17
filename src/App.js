import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actionCreators from './store/actions/index';
import CompanyInfoContainer from './components/CompanyInfoContainer/CompanyInfoContainer';
import CompaniesDrawer from './components/CompaniesDrawer/CompaniesDrawer';
import { Layout } from 'antd';
import styles from './App.module.css';
const { Footer, Header } = Layout;

const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getCompanies());
    dispatch(actionCreators.getCompaniesAddresses());
    dispatch(actionCreators.getProjects());
    dispatch(actionCreators.getEmployees());
  })

  return (
    <Layout className={styles.App}>
      <CompaniesDrawer />
      <Layout className={styles.Layout}>
        <Header className="site-layout-background" />
        <CompanyInfoContainer/>
        <Footer className={styles.Footer}>All this is made for fun :) </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
