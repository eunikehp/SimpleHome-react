import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const SubHeader = ({ current, detail }) => {
    return (
        <Row>
            <Col className='ms-5'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/shop'>Shop</Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb>
                {/* <h2>{current}</h2>
                <hr/> */}
            </Col>
        </Row>
    )
};

export default SubHeader;