
import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import Products from './Page/Products';
import FormPage from './Page/FormPage';
import Update from './Page/Update';

function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/add" element={<FormPage/>}/>
  <Route path='/update/:id' element={<Update/>}/>
</Routes>
    </>
  )
}

export default App
