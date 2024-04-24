import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Changed import

import {
  About,
  Cart,
  Contact,
  HomeLayout,
  Landing,
  Login,
  Register,
  Shop,
  SingleProduct,
  Wishlist,
  Profile,
  Search,
  ThankYou,
  OrderHistory
} from "./Pages";

import { landingLoader } from "./Pages/Landing";
import { singleProductLoader } from "./Pages/SingleProduct";
import { shopLoader } from "./Pages/Shop";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router> {/* Use BrowserRouter */}
        <HomeLayout>
          <Routes>
            <Route path="/" element={<Landing />} loader={landingLoader} />
            <Route path="shop" element={<Shop />} loader={shopLoader} />
            <Route path="shop/product/:id" element={<SingleProduct />} loader={singleProductLoader} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about-us" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="user-profile" element={<Profile />} />
            <Route path="search" element={<Search />} />
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="order-history" element={<OrderHistory />} />
          </Routes>
        </HomeLayout>
      </Router>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
