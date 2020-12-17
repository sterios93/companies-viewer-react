import { Row } from 'antd';
import { useSelector } from 'react-redux';
import { getProjectsSelector } from '../../../store/reducers/projects';
import CompanyProjectListItem from '../CompanyProjectsListItem/CompanyProjectsListItem';

const CompanyProjectList = (props) => {
  const projectsData = useSelector(getProjectsSelector);
  const cards = projectsData.map(data => <CompanyProjectListItem data={data} key={data.id} />);

  const content = projectsData.length
    ? cards
    : <p>This company has no projects</p>;

  return (
    <>
      <h1> Projects </h1>
      <div className="site-card-wrapper">
        <Row gutter={[16, 16]} style={{ justifyContent: 'center' }}>
          {content}
        </Row>
      </div>
    </>
  )
}

export default CompanyProjectList;