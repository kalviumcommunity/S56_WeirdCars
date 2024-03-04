
import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import Products from './Page/Products';
import FormPage from './Page/FormPage';

function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/add" element={<FormPage/>}/>
</Routes>
    </>
  )
}

export default App
