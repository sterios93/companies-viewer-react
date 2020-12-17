import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import CompaniesList from './CompaniesList/CompaniesList';

const CompaniesDrawer = (props) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
      setVisible(true);
  };

  const onClose = () => {
      setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} style={{ position: 'fixed' }} >
        <MenuUnfoldOutlined />
        Show Companies
      </Button>

      <Drawer
        title="Companies"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        bodyStyle={{  padding: 0 }}
      >
        <CompaniesList />
      </Drawer>
    </>
  );
};

export default CompaniesDrawer;