import { Col } from 'reactstrap';

const Loading = () => {
    return (
        <Col>
            <i className='fa fa-spinner fa-pulse fa-3 fa-fw text-primary'/>
            <p>Loading...</p>
        </Col>
    );
};

export default Loading;