import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';


const FavoritePage = () => {
    return (
        <Container>
            <SubHeader current='Favorites'/>

        </Container>
    )
};

export default FavoritePage;
