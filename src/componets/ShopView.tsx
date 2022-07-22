import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { IShop } from '../global'


type Props = {
    shop: IShop
}

export function ShopView({ shop }: Props) {
    return (
           <Card style={{ width: '18rem', height: '18rem', display: "inline-block", margin: "2em" }}>
            <Card.Body>
             <Link to={`/shop/${shop.id}/product`}>
                   <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" />
               </Link>
           </Card.Body>
        </Card >
      

    )
}
      // <Card style={{ width: '18rem', height: '18rem', display: "inline-block", margin: "2em" }}>
        //     <Card.Body>
        //         <Link to={`/shop/${shop.id}/product`}>
        //             <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" />
        //         </Link>
        //     </Card.Body>
        // </Card >