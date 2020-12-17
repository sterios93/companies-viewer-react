import React from 'react';
import { Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectSelector } from '../../../store/reducers/projects';
import { updateProjectName, updateProjectDepartment } from '../../../store/actions/index';

const ProjectDataForm = () => {
  const project = useSelector(getProjectSelector);
  const dispatch = useDispatch();

  const onNameChange = (e) => {
    const text = e.target.value;
    dispatch(updateProjectName({name: text}));
  };  
  
  const onDepartmentChange = (e) => {
    const text = e.target.value;
    dispatch(updateProjectDepartment({department: text}));
  };

  if (!project) return null;
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      size={'small'}
    >
    <Form.Item label="Name">
        <Input 
          defaultValue={project.name}
          onChange={onNameChange}
        />
    </Form.Item>
    <Form.Item label="Department">
        <Input 
          defaultValue={project.department}
          onChange={onDepartmentChange}
        />
    </Form.Item>
    </Form>
  );
};

export default ProjectDataForm;