import './brands.css'

import lv from './../../../../img/brands/lvbrand.svg'
import hermes from './../../../../img/brands/hermes.svg'
import chanel from './../../../../img/brands/chanel.svg'
import SL from './../../../../img/brands/sl.svg'
import BL from './../../../../img/brands/BL.svg'

const Brands = () => {
    return ( 
        <section className="brands">
            <div className="container">
                <ul className="brands_list">
                    
                    <li><img src={lv} alt="" /></li>
                    <li><img src= {SL} alt="" /></li>
                    <li><img src={hermes} alt="" /></li>
                    <li><img src= {chanel} alt="" /></li>
                    <li><img src={BL} alt="" />
                    </li>
                </ul>
            </div>
        </section>
     );
}
 
export default Brands;