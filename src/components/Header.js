import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SimpleHomeLogo from '../app/assets/img/logo.png';
import { useState } from 'react';

const Header = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    <Navbar light sticky='top' expand='md'>
      <NavbarBrand href='/' className='ms-5'>
        <img src={SimpleHomeLogo} alt='simplehome logo' />
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink className='nav-link' to='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/shop'>Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header;