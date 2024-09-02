import SubHeader from '../components/SubHeader';
import { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';


const FAQPage = () => {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div className='page-container'>
            <SubHeader current='FAQ' />
            <div>
                <div className='column-center'>
                    <h2 className='heading-secondary'>Frequently Asked Questions</h2>
                </div>
                <div className='column-center'>
                    <Accordion flush open={open} toggle={toggle}>
                        <AccordionItem>
                            <AccordionHeader targetId="1">General</AccordionHeader>
                            <AccordionBody accordionId="1">
                                <strong>Offer on the website</strong>
                                <br />
                                Via the  SimpleHome website  you get a very good idea of ​​the wide range of SimpleHome products.
                                You won't find some products online, but most of them will!
                                Moreover, you can also order a large number of our products directly in the store of your choice.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="2">To Order</AccordionHeader>
                            <AccordionBody accordionId="2">
                                <strong>How do I place an order?</strong>
                                <br />
                                In the detail of an item you will see an order button 'Add to shopping cart'.
                                You can add it to the shopping cart via this button. Not all items can be ordered
                                via the webshop, but the majority can. Once your choice has been made, proceed to
                                the checkout via the shopping cart. There you log in or create an account (for a first order).
                                The items are paid for immediately on the website.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="3">Pay</AccordionHeader>
                            <AccordionBody accordionId="3">
                                <strong>How can I pay for my order?</strong>
                                <br />
                                We provide the most common online payment methods: Bancontact, iDeal, Visa, Mastercard,
                                Carte Bancaire, Paypal.
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
