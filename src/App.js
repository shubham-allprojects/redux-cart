import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './2.Navbar/Navbar';
import GetProducts from './3.ProductsPages/GetProducts'
import ViewSingleProduct from './3.ProductsPages/ViewSingleProduct'
import MainCartPage from './4.Cart/MainCartPage'
import ScrollButton from './5.Scroll-To-Top/ScrollButton'
import { connect } from "react-redux";
import { ToastContainer } from 'react-toastify';

function App({ current }) {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer autoClose={1800} />
        <Routes>
          <Route path="/" element={<GetProducts />} />
          <Route path="/cart" element={<MainCartPage />} />
          <Route exact path="/product/:id" element={<ViewSingleProduct />} />
        </Routes>
        <ScrollButton />
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
