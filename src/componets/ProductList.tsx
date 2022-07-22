import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { IProduct } from '../global';
import { getProducts } from '../api/GetArratOfShop'
import { Product } from './Product';

export function ProductList() {
  const { id } = useParams();
  console.log("ID= " + id);
  const [products, setProducts] = useState<IProduct[]>()
  useEffect(() => {
    async function fetchGet() {

      if (!id) { setProducts([]); return; }

      const productsResponse = await getProducts(id);
      console.log(productsResponse);
      setProducts(productsResponse);
    }

    fetchGet();
  }, [id]);


  return (
    <>

      <div className="col-md-9">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-2 g-4 "> {
            products?.map(pr => {
              return (

                <Product key={pr.id} product={pr} />

              )
            })
          }
          </div>
        </div>
      </div>
    </>
  )

}
