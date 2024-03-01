
import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import Products from './Page/Products';

function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<Products/>}/>
</Routes>
    </>
  )
}

export default App
