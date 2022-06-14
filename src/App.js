import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom'
import Navbar from './2.Navbar/Navbar';
import GetProducts from './3.ProductsPages/GetProducts'
import ViewSingleProduct from './3.ProductsPages/ViewSingleProduct'
import MainCartPage from './4.Cart/MainCartPage'

import { connect } from "react-redux";

function App({ current }) {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetProducts />} />

          <Route path="/cart" element={<MainCartPage />} />
          {/* {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" element={<ViewSingleProduct />} />
          )} */}
          <Route exact path="/product/:id" element={<ViewSingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
