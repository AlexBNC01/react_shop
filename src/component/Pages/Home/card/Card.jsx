import Cards from '../newcard/Cards';
import './card.css'


const Card = () => {
    return ( 
        <section className='card'>
            <div className="container">
                <div className="header">
                    <h2 className="title2">Наши новинки</h2>
                </div>
                <div className="cards">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
        </section>
     );
}
 
export default Card;