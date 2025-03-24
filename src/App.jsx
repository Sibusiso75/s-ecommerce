import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './Auth/SignUp'
import Login from './Auth/Login'
import CartPage from './Cart/CartPage/CartPage'
import SinglePage from './Cart/SinglePage/SinglePage'
import ForgotPassword from './Auth/ForgotPassword'
import ResetPassword from './Auth/ResetPassword'
import Order from './Order/Order'
function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/item/:id" element={<SinglePage />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/resetPassword/:token" element={<ResetPassword />}></Route>
        <Route path="/order" element={<Order/>}></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App