
import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import Products from './Page/Products';
import FormPage from './Page/FormPage';
import Update from './Page/Update';
import LoginPage from './Page/LoginPage';

function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/add" element={<FormPage/>}/>
  <Route path='/update/:id' element={<Update/>}/>
  <Route path='/login' element={<LoginPage/>}/>
</Routes>
    </>
  )
}

export default App
