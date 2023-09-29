import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./App/Pages/Home/HomePage";
import Products from "./App/Pages/Products/Products"
import Solutions from "./App/Pages/Solutions/Solutions"
import PricingPage from "./App/Components/PricingPage/PricingPage";
// import Pricing from "./App/Pages/Pricing/Pricing"

function App() {
    return ( 
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/Solutions" element={<Solutions/>}/>
                <Route path="/PricingPage" element={<PricingPage/>}/>
                {/* <Route path="/Pricing" element={<Pricing/>}/> */}
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;