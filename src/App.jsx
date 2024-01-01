import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
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
import ThankYouPage from './pages/ThankYouPage'
import NotFoundPage from './pages/NotFoundPage'
import FaqPage from './pages/FaqPage'
import CartEmptyPage from './pages/CartEmptyPage'
import PrivacyPage from './pages/PrivacyPage'
import TosPage from './pages/TosPage'
import LoginPage from './pages/LoginPage'
import AccountPage from './pages/AccountPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/single-product" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart-empty" element={<CartEmptyPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/tos" element={<TosPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
