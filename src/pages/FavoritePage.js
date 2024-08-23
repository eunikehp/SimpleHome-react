import SubHeader from '../components/SubHeader';
import FavoritesList from '../features/favorites/FavoritesList';


const FavoritePage = () => {

    return (
        <div className='page-container'>
            <SubHeader current='Favorites' />
            <h2 className='heading-secondary'>Wish List</h2>
            <hr/>
            <FavoritesList />
        </div>
    )
};

export default FavoritePage;
