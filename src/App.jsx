import './assets/css/bootstrap.min.css'
import './assets/css/font.awesome.css'
import './assets/css/pe-icon-7-stroke.css'
import './assets/css/animate.min.css'
import './assets/css/swiper-bundle.min.css'
import './assets/css/venobox.css'
import './assets/css/jquery-ui.min.css'
import './assets/css/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SingleProductPage from './pages/SingleProductPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/single-product" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
