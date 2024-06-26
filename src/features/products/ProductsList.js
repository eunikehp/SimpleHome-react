import ProductCard from "./ProductCard";
import { Col, Row } from 'reactstrap';
import { selectAllProducts } from "./productsSlice";
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const ProductsList = () => {
    const products = useSelector(selectAllProducts);

    //error and loading
    const isLoading = useSelector((state) => state.products.isLoading);
    const errMsg = useSelector((state) => state.products.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        )
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg}/>
            </Row>
        )
    }

    return (
        <>
            <Row className="ms-auto">
                {products.map((product) => {
                    return (
                        <Col
                            md='2'
                            className="m-1"
                            key={product.id}
                        >
                            <ProductCard product={product} />
                        </Col>
                    );
                })}
            </Row>
            {/* <Row>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mt-4">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </Row> */}
        </>
    );
};

export default ProductsList;