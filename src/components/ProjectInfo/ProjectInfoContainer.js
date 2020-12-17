import React from 'react';
import ProjectDataForm from './ProjectDataForm/ProjectDataForm';
import ProjectEmployeeSelect from './ProjectEmployeeSelect/ProjectEmployeeSelect';
import ProjectEmployeeList from './ProjectsEmployeeList/ProjectEmployeeList';
import ProjectEmployeeInfo from './ProjectEmployeeInfo/ProjectEmployeeInfo';

const projectInfo = () => {
  return (
    <>
      <h4>Project Info</h4>
      <ProjectDataForm />
      <ProjectEmployeeSelect />
      <ProjectEmployeeList />
      <ProjectEmployeeInfo />
    </>
  );
};

export default projectInfo;