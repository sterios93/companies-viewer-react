import React from 'react';
import { Menu, Spin } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getCompaniesSelctor, getCompaniesLoading } from '../../../store/reducers/companies';
import * as actionCreators from '../../../store/actions/index';
import styles from './CompaniesList.module.css';


const CompaniesList = props => {
  const companies = useSelector(getCompaniesSelctor);
  const companiesLoading = useSelector(getCompaniesLoading);
  const dispatch = useDispatch();

  const items = companies.map(c => {
    return (
      <Menu.Item
        key={c.id}
        icon={<AppstoreOutlined />}
        onClick={() => dispatch(actionCreators.setActiveCompany({ id: c.id }))}
      >
        {c.name}
      </Menu.Item>
    )
  });

  const spinner = companiesLoading
    ? <Spin className={styles.Spinner} />
    : null;

  return (
    <>
      {spinner}
      <Menu theme="dark" mode="inline" className={styles.Menu}>
        {items}
      </Menu>
    </>

  )
}


export default CompaniesList;