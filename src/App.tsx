import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import TopBar from "components/TopBar";
import Home from "pages/Home";
import Basket from "pages/Basket";
import ContactUs from "pages/ContactUs";
import Product from "pages/Product";
import AllProducts from "pages/AllProducts";
import Footer from "components/Footer";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <ScrollToTop>
        <TopBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/basket" element={<Basket />} />

          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/product/:id" element={<Product />} />

          <Route path="/all-products" element={<AllProducts />} />
        </Routes>

        <Footer />
      </ScrollToTop>
    </>
  );
};

export default App;
