import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Offcanvas,
  OffcanvasHeader,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SimpleHomeLogo from '../app/assets/img/logo.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserForm from '../features/user/UserForm';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar light sticky='top'className='px-4' >
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <NavbarBrand href='/'>
        <img src={SimpleHomeLogo} alt='simplehome logo' />
      </NavbarBrand>
      <Offcanvas isOpen={menuOpen} navbar>
        <OffcanvasHeader className='mx-4' toggle={() => setMenuOpen(false)}>
          <img style={{ width: '40%' }} src={SimpleHomeLogo} alt='simplehome logo' />
        </OffcanvasHeader>
        <Nav className='m-5 fs-4' navbar>
          <NavItem>
            <NavLink
              className='nav-link'
              style={{ color: 'black' }}
              to='/'
              onClick={() => setMenuOpen(false)}
            >Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className='nav-link'
              style={{ color: 'black' }}
              to='/shop'
              onClick={() => setMenuOpen(false)}
            >Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className='nav-link'
              style={{ color: 'black' }}
              to='/contact'
              onClick={() => setMenuOpen(false)}
            >Contact</NavLink>
          </NavItem>
        </Nav>
      </Offcanvas>
      <Nav className='align-items-center'>
        <FontAwesomeIcon className='navbar-icon' icon="fa-solid fa-cart-shopping" />
        <FontAwesomeIcon className='navbar-icon' icon="fa-solid fa-heart" />
        <UserForm/>
      </Nav>
    </Navbar>
  )
}

export default Header;