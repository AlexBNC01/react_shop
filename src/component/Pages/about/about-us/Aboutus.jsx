import './../about-us/about-us.css'

const Aboutus = () => {
    return ( 
        <div className="container">
            <div className="about-title">
                <p className="about-title2">О нас</p>
            </div>
            <div className="about-text">
                    <p className="about-text_p">Через наши руки прошли тысячи людей, у нас более 10 лет опыта. 
                        Мы всегда проводим тщательную аутентификацию перед продажей гарантируя оригинальность.
                    </p>
                    <p className='about-text_p2'>Наш полный список услуг:</p>
                    <ul className='ul'>
                        <li>- Большой каталог сумок и аксессуаров</li>
                        <li>- Поиск товаров под Вас (аутентификация товара уже произведена);</li>
                        <li>- Аутентификация Вашего товара;</li>
                        <li>- Рестоврация товаров любой сложности;</li>
                        <li>- Реализация Вашего товара;</li>
                        <li>- Возможность заказать международную аутентификацию.</li>
                        <li></li>
                    </ul>
                </div>
        </div>
     );
}
 
export default Aboutus;