import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./App/Pages/Home/HomePage";
import Products from "./App/Pages/Products/Products";
import Solutions from "./App/Pages/Solutions/Solutions";
import Pricing from "./App/Pages/Pricing/Pricing";
import WhyUs from "./App/Pages/WhyUS/WhyUs";
// import "./App/Assets/Roboto/Roboto-Black.tff";
// import "./App/Assets/Roboto/Roboto-Bold.tff";
// import "./App/Assets/Roboto/Roboto-Light.tff";
// import "./App/Assets/Roboto/Roboto-Medium.tff";
// import "./App/Assets/Roboto/Roboto-Regular.tff";
// import "./App/Assets/Roboto/Roboto-Thin.tff";
import Contactus from "./App/Pages/ContactUs/Contactus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/WhyUs" element={<WhyUs />} />
          <Route path="/ContactUs" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
