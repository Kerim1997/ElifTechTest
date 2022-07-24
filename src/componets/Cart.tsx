import { Header } from "./Header";
import { ContactForm } from "./ContactForm";
import { ProductsCartView } from "./ProductsCartList";
import Row from 'react-bootstrap/Row';
import { TotalPrice } from "./TotalPrice";

export function Cart (){
    return (
        <>
            <Header/>
            <Row>
                <ContactForm/>
                <ProductsCartView/>
            </Row>
            <TotalPrice/>
        </>
    );
}