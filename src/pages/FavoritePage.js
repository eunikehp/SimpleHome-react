import { Container, Row, Col, Button } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import { useState } from 'react';
import FavoritesList from '../features/favorites/FavoritesList';


const FavoritePage = () => {

    return (
        <Container>
            <SubHeader current='Favorites' />
            <h2>Wish List</h2>
            <FavoritesList />
        </Container>
    )
};

export default FavoritePage;
