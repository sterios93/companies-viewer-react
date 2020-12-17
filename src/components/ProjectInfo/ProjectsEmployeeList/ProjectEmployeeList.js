import React from 'react';
import { List } from 'antd';
import ProjectEmployeeItem from '../ProjectEmployeeItem/ProjectEmployeeItem';
import { useSelector } from 'react-redux';
import { getProjectSelector } from '../../../store/reducers/projects';

const ProjectEmployeeList = (props) => {
  const project = useSelector(getProjectSelector);

  if (!project) return null;

  const employees = project.employeesId.map(id => {
    return (
      <ProjectEmployeeItem 
        key={id} 
        id={id} 
      />
    )
  });

  return (
    <>
      <div className="demo-infinite-container"
        style={{
            maxHeight: '300px',
            overflowY: 'scroll',
            marginTop: '10px',
            marginBottom: '10px',
        }}>
        <h4>Employees</h4>  

        <List> {employees} </List>
      </div>
    </>
  );
}

export default ProjectEmployeeList;