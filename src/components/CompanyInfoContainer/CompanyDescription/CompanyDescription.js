import { Descriptions } from 'antd';
import { useSelector } from 'react-redux';
import { getCompanyInfo } from '../../../store/reducers/companies';
import { NotificationOutlined, TrademarkOutlined, TagOutlined, ThunderboltOutlined, PushpinOutlined, HomeOutlined, IdcardOutlined } from '@ant-design/icons';

const CompanyDescription = (props) => {
  const { companyAddress = {}, companyData = {} } = useSelector(getCompanyInfo);
  return (
  <Descriptions title="Company Info" layout="vertical">
    <Descriptions.Item label="Name" labelStyle={{ color: '#1890ff', fontWeight: 500 }}> <TrademarkOutlined style={{marginRight: '3px'}}/> {companyData.name}</Descriptions.Item>
    <Descriptions.Item label="Business" labelStyle={{ color: '#1890ff', fontWeight: 500 }}> <ThunderboltOutlined style={{ marginRight: '3px'}} />{companyData.business}</Descriptions.Item>
    <Descriptions.Item label="Slogan" labelStyle={{ color: '#1890ff', fontWeight: 500 }}><NotificationOutlined style={{ marginRight: '3px'}} /> {companyData.slogan}</Descriptions.Item>
    <Descriptions.Item label="City" labelStyle={{ color: '#1890ff', fontWeight: 500 }}><PushpinOutlined style={{ marginRight: '3px'}} /> {companyAddress.city}</Descriptions.Item>
    <Descriptions.Item label="Country" labelStyle={{ color: '#1890ff', fontWeight: 500 }}><HomeOutlined style={{marginRight: '3px'}} /> {companyAddress.country}</Descriptions.Item>
    <Descriptions.Item label="Street" labelStyle={{ color: '#1890ff', fontWeight: 500 }}><TagOutlined style={{marginRight: '3px'}} /> {companyAddress.street}</Descriptions.Item>
    <Descriptions.Item label="State" labelStyle={{ color: '#1890ff', fontWeight: 500 }}><IdcardOutlined style={{marginRight: '3px'}} /> {companyAddress.state}</Descriptions.Item>
  </Descriptions>
  )
};

export default CompanyDescription;