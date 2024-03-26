import { Container, Navbar, NavbarBrand } from 'reactstrap';
import SimpleHomeLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={SimpleHomeLogo} alt='simplehome logo'/>
          </NavbarBrand>
        </Container>
      </Navbar>
    )
}

export default Header;