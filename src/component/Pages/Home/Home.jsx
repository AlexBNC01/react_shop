// import Brands from "./../Home/brands/Brands";
import Card from "./../Home/card/Card";
import Header from "./../Home/header/Header";
import Promo from "./../Home/promo/Promo"
import Read from "./readmore/Read";
import Brands2 from './brands2/Brands2'
import Footer from './footer/Footer'

const Home = () => {
    return ( 
        <div className="App">
      
      <Header></Header>
      <Promo></Promo>
      {/* <Brands></Brands> */}
      <Brands2></Brands2>
      <Card></Card>
      <Read></Read>
      <Footer></Footer>
    </div>
     );
}
 
export default Home;