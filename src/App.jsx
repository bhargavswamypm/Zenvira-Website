import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact";
import Specifications from "./pages/Specifications";
import WhatsappButton from "./components/WhatsappButton";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/partner" element={<Partner />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/specifications" element={<Specifications />} />
            <WhatsappButton />
            <Route
  path="/products/:id"
  element={<ProductDetails />}
/>
    </Routes>
  );
}

export default App;