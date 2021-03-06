import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Store from './pages/Store';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/contact"element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
