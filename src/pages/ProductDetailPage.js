import { Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductById } from '../features/products/productsSlice';
import ProductDetail from '../features/products/ProductDetail';
import SubHeader from '../components/SubHeader';
import Error from '../components/Error';
import Loading from '../components/Loading';

const ProductDetailPage = () => {
    const { productId } = useParams(); //useParams() will always parse URL parameters as strings. 
    const selectedProduct = useSelector(selectProductById(productId));
    console.log('selectedProduct: ', selectedProduct);

    //error and loading
    const isLoading = useSelector((state) => state.products.isLoading);
    const errMsg = useSelector((state) => state.products.errMsg);
    let content = null;

    if(isLoading)  {
        content = <Loading/>
    } else if (errMsg) {
        content = <Error errMsg={errMsg}/>
    } else {
        content = <ProductDetail product={selectedProduct}/>
    }
    
    return (
        <div className='page-container'>
            {selectedProduct &&<SubHeader current={selectedProduct.name} detail={true} />}
            <Row>
                {content}
            </Row>
        </div>
    )
}


export default ProductDetailPage;