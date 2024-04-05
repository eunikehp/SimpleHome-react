import { Row, Nav, NavItem,NavLink } from 'reactstrap';


const ShopMenu = () => {
    return (
        <Row>
            <Nav justified>
                <NavItem>
                    <NavLink
                        href="#">
                        Dining Table
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Sofa
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" >
                        Bed
                    </NavLink>
                </NavItem>
            </Nav>
        </Row>
    )
};

export default ShopMenu;