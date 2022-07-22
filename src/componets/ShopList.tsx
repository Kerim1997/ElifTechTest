import { useEffect, useState } from 'react';
import { IShop } from '../global';
import { getShops } from '../api/GetArratOfShop';
import { ShopView } from './ShopView';
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
            <div className="col-md-3 bg-light">
               
                <div className="d-grid gap-2 col-6 mx-auto">
                    {

                        data?.map(shop => {
                            return (
                                <ShopView key={shop.id} shop={shop} />
                            )
                        })
                    }
                </div>
            </div>
       
      </>
    )
}
