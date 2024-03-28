import { Container } from 'reactstrap';
import Cover from '../app/assets/img/cover.jpg'
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home'/>
            <img 
                width='100%'
                src={Cover} 
                alt='cover'
            />
        </Container>
    )
};

export default HomePage;