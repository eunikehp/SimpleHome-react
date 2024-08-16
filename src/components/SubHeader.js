import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const SubHeader = ({ current, detail }) => {
    return (
        <Row>
            <Col>
                <Breadcrumb className='breadcrumb'>
                    <BreadcrumbItem>
                        <Link to='/' style={{ textDecoration: 'none', color:'gray' }} >Home</Link>
                    </BreadcrumbItem>
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/shop' style={{ textDecoration: 'none', color:'gray' }}>Shop</Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem active style={{ color: 'black'}}>{current}</BreadcrumbItem>
                </Breadcrumb>
                {/* <h2>{current}</h2>
                <hr/> */}
            </Col>
        </Row>
    )
};

export default SubHeader;