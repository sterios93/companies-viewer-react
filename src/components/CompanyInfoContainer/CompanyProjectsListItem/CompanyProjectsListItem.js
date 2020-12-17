import { Card, Col,  Button } from 'antd';
import {  useDispatch } from 'react-redux';
import { toggleModal, setActiveProject } from '../../../store/actions/index';
import { InfoOutlined } from '@ant-design/icons';

const CompanyProjectListItem = (props) => {
  const dispatch = useDispatch();

  const onInfoClick = (id) => {
    dispatch(toggleModal({ value: true }));
    dispatch(setActiveProject({ id }));
  }

  return (
    <Col span={8} xs={20} sm={20} md={10} lg={8} xl={8}>
      <Card
        title={props.data.name}
        key={props.data.id}
        extra={
          <Button
            type="primary"
            shape="circle"
            icon={<InfoOutlined />}
            size={'small'}
            onClick={() => onInfoClick(props.data.id)}
          />}
        bordered={false}
      >
        {props.data.department}
      </Card>
    </Col>
  )
}

export default CompanyProjectListItem;