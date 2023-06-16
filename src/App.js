import { Route, Routes } from "react-router-dom";

// import Brands from "./component/brands/Brands";
// import Card from "./component/card/Card";
// import Header from "./component/header/Header";
// import Promo from "./component/promo/Promo"
import Home from "./component/Pages/Home/Home";
import About from './component/Pages/about/About';
import Contactus from './component/Pages/contactus/Contactus'
import Catalog from './component/Pages/catalog/Catalog';
import Offer from './component/Pages/offer/Offer';
import './css/reset.css';


function App() {
  

  return (
    
    <div className="App">
      
      {/* <Header></Header>
      <Promo></Promo>
      <Brands></Brands>
      <Card></Card> */}
      <Routes>
        <Route path='/about' element ={<About/>}></Route>
        <Route path='/home' element ={<Home/>}></Route>
        <Route path='/contactus' element ={<Contactus/>}></Route>
        <Route path='/catalog' element ={<Catalog/>}></Route>
        <Route path='/offer' element ={<Offer/>}></Route>

      </Routes>
    </div>
    
  );
}

export default App;
