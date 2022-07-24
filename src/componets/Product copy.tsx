import { IProduct } from "../global";
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { count } from "console";
import { getValue } from "@testing-library/user-event/dist/utils";
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

type Props = {
    product: IProduct;
}
const hey = atom(0);
 function Product({ product }: Props) {

    const [count, SetCounter] = useState(0);
    const [abc] = useAtom(hey)



    function AddOrder() {
        // var newCart = [...cart];
        // newCart.push(product);
        // setCart(newCart);

        // let tempMasOfBuyProducts: IProduct[] = [];
        // if (localStorage.getItem("ArrayOfBuyProducts") == null) {
        //     tempMasOfBuyProducts.push(product);
        //     localStorage.setItem("ArrayOfBuyProducts", JSON.stringify(tempMasOfBuyProducts))

        // }

        // else {
        //     var resdata = localStorage.getItem("ArrayOfBuyProducts");
        //     if (resdata != null) {
        //         var res = JSON.parse(resdata);
        //         tempMasOfBuyProducts = res;
        //         tempMasOfBuyProducts.push(product);
        //         localStorage.setItem("ArrayOfBuyProducts", JSON.stringify(tempMasOfBuyProducts));
        //     }
        // }
    }
    function increment() {

        SetCounter(count + 1);

    }
    function decrement() {

        SetCounter(count - 1);

    }
    // function GetCountFromLocalocalStorage(){
    //     const storage=localStorage.getItem("count");
    //     if(storage){
    //         return JSON.parse(storage);
    //     }
    // }
    console.log("product.count " + product.countOfSale);

    return (
        <>

            <div className="card m-4 mx-auto" style={{ width: '18rem' }}>
                <div className="card-body" key={product.id}>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.prise}</p>
                    <button onClick={AddOrder} className="btn btn-primary">Add to cart</button>
                    <div style={{ display: 'flex' }}>
                        <Button onClick={increment} variant="primary" style={{ width: '2px' }}>+</Button>
                        <p>{product.countOfSale}</p>
                        <Button onClick={decrement} variant="primary" style={{ width: '2px' }}>-</Button>
                    </div>

                </div>
            </div>

        </>
    )
}

