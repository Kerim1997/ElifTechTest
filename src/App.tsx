import React from 'react';
import './App.css';
import { getProducts, getShops } from './api/GetArratOfShop';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './componets/Header';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { ProductList } from './componets/ProductList';
import { ShopList } from './componets/ShopList';


function App() {

  return (
    <BrowserRouter>
      <div className="App container-fluid">
        <Header />
        <div className="row m-3">
          <ShopList />
          <Routes>
            <Route path='/' element={1} />
            <Route path='/shop/:id/product' element={<ProductList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}





export default App;




// shop -> IShop[]  
// shop/:id -> IShop
// shop/:id/product -> IProduct[]
// shop/:id/product/:id -> IProduct