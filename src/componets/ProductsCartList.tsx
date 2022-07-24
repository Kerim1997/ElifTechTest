import { CartProduct } from "./CartProduct";
import Col from 'react-bootstrap/Col';
export function ProductsCartView(){
    return (
        <Col className ="col-xs-12 col-md-6 bg-light mt-5 mx-auto p-5 shadow rounded" style={{overflowY: "scroll", maxHeight:'430px'}}>      
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
        </Col>
    )
}