import Button from 'react-bootstrap/Button';
// import { IProduct } from "../global";

// type Props = {
//     product: IProduct;
// }

export function CartProduct(){
    return(
        <div className ="card mb-3 mx-auto" style={{maxWidth: '640px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="http://primebeef.ru/images/cms/data/img_3911.jpg" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">test</h5>
                        <p className="card-text">345</p>
                        <Button variant="primary">-</Button>{' '}
                        <Button variant="primary">+</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}