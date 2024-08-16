import ProductsList from '../features/products/ProductsList';
import SubHeader from '../components/SubHeader';
import ShopMenu from '../components/ShopMenu';

const ShopPage = () => {

    return (
        <div className='content'>
            <SubHeader current='Shop'/>
            {/* <ShopMenu/> */}
            <div >
                <ProductsList /> 
            </div>
        </div>

    );
};

export default ShopPage;