import { useEffect, useState } from 'react';
import { IShop } from '../global';
import { getShops } from '../api/GetArratOfShop';
import { ShopView } from './ShopView';
import Col from 'react-bootstrap/Col';

export function ShopList() {
    const [data, setData] = useState<IShop[]>()
    useEffect(() => {
        async function fetchGet() {
            const posts = await getShops();
            setData(posts);
        }
        fetchGet();
    }, []);

    return (
        <>
            <Col className="col-md-3 bg-light">     
                    {
                        data?.map(shop => {
                            return (
                                <ShopView key={shop.id} shop={shop} />
                            )
                        })
                    }
            </Col>
       
      </>
    )
}
