import React, { useState } from 'react';
import { Select, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployees } from '../../../store/reducers/employees';
import { getProjectSelector } from '../../../store/reducers/projects';
import { addEmployeeToProject } from '../../../store/actions/index';
import { createSelector} from 'reselect';
const { Option, OptGroup } = Select;


const ProjectEmployeeSelect = (props) => {
  const [selectedEmployeeId, setEmployeeId] = useState(null);
  const dispatch = useDispatch();

  const handleChange = value => {
    setEmployeeId(value);
  }
  const onAdd = () => {
    if (!selectedEmployeeId) return;
  
    dispatch(addEmployeeToProject({id: selectedEmployeeId}));
    setEmployeeId(null);
  }

  const employeesSelector = createSelector(
    getEmployees, getProjectSelector,
    (employees, currentProject) => {
      if (!currentProject) return [];

      return employees.filter(e => !currentProject.employeesId.includes(e.id));
    });
  const employees = useSelector(employeesSelector);

  const employeesByJobType = employees.reduce((res, e) => {
    if (!res[e.jobType]) res[e.jobType] = [];
    res[e.jobType].push(e);
    return res;
  }, {});


  const selectDom = Object.keys(employeesByJobType).map(jobType => {
    const employees = employeesByJobType[jobType];
    const options = employees.map(e => {
      return (
        <Option key={e.id} value={e.id}>{`${e.firstName} ${e.lastName}`}</Option>
      )
    })
    return (
      <OptGroup label={jobType} key={jobType} >
        {options}
      </OptGroup>
    )
  })

  return (
    <>
      <h4> Add Employee to the project </h4>

      <Select style={{ width: 200 }} onChange={handleChange} value={selectedEmployeeId}>
        {selectDom}
      </Select>

      <Button type="primary" onClick={onAdd} > Add </Button>
    </>
  )
}

export default ProjectEmployeeSelect;