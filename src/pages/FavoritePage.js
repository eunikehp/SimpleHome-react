import { Container} from 'reactstrap';
import SubHeader from '../components/SubHeader';
import FavoritesList from '../features/favorites/FavoritesList';


const FavoritePage = () => {

    return (
        <Container className='content'>
            <SubHeader current='Favorites' />
            <h2>Wish List</h2>
            <hr/>
            <FavoritesList />
        </Container>
    )
};

export default FavoritePage;
