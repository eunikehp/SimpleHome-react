import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Offcanvas,
  OffcanvasHeader,
  Badge
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SimpleHomeLogo from '../app/assets/img/logo.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserForm from '../features/user/UserForm';
import { useSelector } from 'react-redux';
import { selectAllCart } from '../features/cart/CartSlice';
import { selectAllFavorites } from '../features/favorites/FavoritesSlice';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const cart = useSelector((state) => state.cart.cartArray)
  const cart = useSelector(selectAllCart)
  const favorites = useSelector(selectAllFavorites)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => { total += item.quantity});
    return total;
  }

  const getTotalFav = () => {
    let totalFav = 0
    favorites.forEach(item => { totalFav += 1});
    return totalFav;
  }

  return (
    <Navbar light sticky='top'>

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

          <NavItem>
            <NavLink
              className='nav-link'
              style={{ color: 'black' }}
              to='/faq'
              onClick={() => setMenuOpen(false)}
            >FAQ</NavLink>
          </NavItem>
        </Nav>
      </Offcanvas>

    
      <Nav className='align-items-center' >
        <NavItem>
          <UserForm />
        </NavItem>

        <NavItem>
          <NavLink
            to='/favorites'
            style={{position:'relative',color: '#463F3A'}} >
            <FontAwesomeIcon
              className='navbar-icon'
              icon="fa-solid fa-heart"
            />
            <Badge 
              color="danger"
              style={{position:'absolute', left: '60%', bottom: '60%', fontSize:'1rem', borderRadius: '50%'}}>
                {getTotalFav() || 0 }
            </Badge>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to='/cart'
            style={{position:'relative', color: '#463F3A'}}>
            <FontAwesomeIcon
              className='navbar-icon'
              icon="fa-solid fa-cart-shopping"
               />
            <Badge 
              color="danger"
              style={{position:'absolute', left: '60%', bottom: '60%', fontSize:'1rem', borderRadius: '50%'}}>
                {getTotalQuantity() || 0 }
            </Badge>
          </NavLink>
        </NavItem>

      </Nav>
    </Navbar>
  )
}

export default Header;