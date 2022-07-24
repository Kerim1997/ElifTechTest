import React from 'react';
import './App.css';
import { getProducts, getShops } from './api/GetArratOfShop';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './componets/Header';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { ProductList } from './componets/ProductList';
import { ShopList } from './componets/ShopList';
import {Cart} from './componets/Cart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
{/* <Container fluid>
       <Header/>
    </Container> */}

function App() {
  return (
 
    <BrowserRouter>
      <Container fluid>
        <Header />
        <Row className="m-3">
          <ShopList />
          <Routes>
            <Route path='/' />
            <Route path='/shop/:id/product' element={<ProductList />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}


export default App;


// shop -> IShop[]  
// shop/:id -> IShop
// shop/:id/product -> IProduct[]
// shop/:id/product/:id -> IProduct