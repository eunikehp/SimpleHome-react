import ProductsList from '../features/products/ProductsList';
import SubHeader from '../components/SubHeader';
import ShopMenu from '../components/ShopMenu';

const ShopPage = () => {

    return (
        <div className='page-container'>
            <SubHeader current='Shop'/>
            {/* <ShopMenu/> */}
            <div className='product-list'>
                <ProductsList /> 
            </div>
        </div>

    );
};

export default ShopPage;