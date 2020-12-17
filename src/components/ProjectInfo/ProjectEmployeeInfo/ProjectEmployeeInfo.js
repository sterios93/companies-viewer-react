import React from 'react';
import { Avatar, List, Button, Popover, Row, Col, Descriptions } from 'antd';
import { useSelector } from 'react-redux';
import { getEmployeeData, getEmployees } from '../../../store/reducers/employees';
import { getAllProjects } from '../../../store/reducers/projects';
import { createSelector } from 'reselect';

const ProjectEmployeeInfo = (props) => {
  const employeeData = useSelector(getEmployeeData);

  const employeeProjectsSelector = id => {
    return createSelector(
      getAllProjects,
      projects => projects.filter(p => p.employeesId.includes(id))
    )
  }

  const employeesByAreaSelector = area => {
    return createSelector(
      getEmployees,
      employees => employees.filter(e => e.jobArea === area)
    )
  }

  const employeesProjectsSelector = (employees = []) => {
    return createSelector(
      getAllProjects,
      projects => {
        return employees.reduce((res, employee) => {
          const proj = projects.filter(p => p.employeesId.includes(employee.id));
          proj.forEach(p => {
            if (!res.includes(p.name)) res.push(p.name);
          })
          return res;
        }, []);
      }
    )
  }

  const employeeId = employeeData?.id || null;
  const employeeArea = employeeData?.jobArea || null;
  const employeeProjects = useSelector(employeeProjectsSelector(employeeId));
  const employeesByArea = useSelector(employeesByAreaSelector(employeeArea));
  const employeesAreaProjects = useSelector(employeesProjectsSelector(employeesByArea));
  if (!employeeData) return null;

  const { firstName, lastName, jobArea, jobTitle, jobType, dateOfBirth } = employeeData;
  return (
    <>
      <Row>
        <Col span={12} xs={20} sm={20} md={10} lg={8} xl={8}>
          <Row justify={'center'}>
              <Col>
                <Avatar
                size={{ xs: 200, sm: 200, md: 200, lg: 200, xl: 200, xxl: 300 }}
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </Col>
          </Row>
        </Col>

        <Col span={12}>
          <Descriptions title="Employee Info" layout="vertical">
            <Descriptions.Item label="First Name" labelStyle={{ color: '#000000D9', fontWeight: 500 }}> {firstName}</Descriptions.Item>
            <Descriptions.Item label="Last Name" labelStyle={{ color: '#000000D9', fontWeight: 500 }}> {lastName}</Descriptions.Item>
            <Descriptions.Item label="Job Title" labelStyle={{ color: '#000000D9', fontWeight: 500 }}> {jobTitle}</Descriptions.Item>
            <Descriptions.Item label="Job Type" labelStyle={{ color: '#000000D9', fontWeight: 500 }}>  {jobType}</Descriptions.Item>
            <Descriptions.Item label="Date of Birth" labelStyle={{ color: '#000000D9', fontWeight: 500 }}> {dateOfBirth}</Descriptions.Item>
          </Descriptions>

          <Popover placement="topLeft" title={jobArea} content={
            <>
              <p>Employees count: {employeesByArea.length} </p>
              <p>Projects count: {employeesAreaProjects.length}</p>
            </>
          }>
            <Button>Job Area</Button>
          </Popover>
        </Col>
      </Row>
      
      <p>Employee projects: </p>
      <List
        size="small"
        bordered
        dataSource={employeeProjects}
        renderItem={item => <List.Item>{item.name}</List.Item>}
      />
    </>
  )
}

export default ProjectEmployeeInfo;