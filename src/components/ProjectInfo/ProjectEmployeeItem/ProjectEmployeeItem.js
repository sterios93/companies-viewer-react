// TODO:: add employee info here
import React from 'react';
import { List, Avatar, Button } from 'antd';
import { DeleteOutlined, InfoOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { getEmployees, getActiveEmployeeId } from '../../../store/reducers/employees';
import { setActiveEmployee, removeEmployeeFromProject } from '../../../store/actions/index';


const ProjectEmployeeItem = props => {
  const getEmployeeData = id => {
    return createSelector(
      getEmployees,
      items => items.find(item => item.id === id)
    )
  };

  const employeeData = useSelector(getEmployeeData(props.id));
  const activeEmployeeId = useSelector(getActiveEmployeeId);
  const dispatch = useDispatch();

  const onNameClick = () => {
    dispatch(setActiveEmployee({ id: props.id }));
  }

  const onRemoveClick = () => {
    dispatch(removeEmployeeFromProject({ id: props.id }));
    if (activeEmployeeId === props.id) {
      dispatch(setActiveEmployee({ id: null }));
    }
  }

  if (!employeeData) return

  return (
    <List.Item key={1}>

      <List.Item.Meta
        avatar={ <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> }
        title={`${employeeData.firstName} ${employeeData.lastName}` }
        description={employeeData.jobTitle}
      />
        
      <Button type="primary" onClick={onNameClick} style={{marginRight: '5px'}} shape="circle" icon={<InfoOutlined />} size={'small'} />
      <Button type="danger" onClick={onRemoveClick} style={{ marginRight: '3px'}} shape="circle" icon={<DeleteOutlined />} size={'small'} />
    </List.Item>
  )
}

export default ProjectEmployeeItem;