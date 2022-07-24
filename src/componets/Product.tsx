import { IProduct } from "../global";


type Props = {
    product: IProduct;
}

export function Product({ product }: Props) {

    return (
        <>
            <div className="card m-4 mx-auto" style={{width: '18rem'}}>    
                <div className="card-body" key={product.id}>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.prise}</p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>        
        </>
    )
}
