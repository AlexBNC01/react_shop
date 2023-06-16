
import logoImg from './../../../../img/icons/v.svg';
import './header.css'


function Header() {
  return (
    <header className='header'>
        <div className='container'>
            <div className="header_row">
                <div className="header_logo">
                    <img src={logoImg} alt="" />
                    <span>IT-Bag</span>

                </div>
                <nav className="header_nav">
                    <ul>
                        <li><a href="/home">ГЛАВНАЯ</a></li> 
                        <li><a href="/catalog">КАТАЛОГ</a></li> 
                        <li><a href="/about">О НАС</a></li>
                        <li><a href="/offer">ПРЕДЛОЖИТЬ ТОВАР</a></li>
                        <li><a href="/contactus" className='nav_btn'>СВЯЗЬ</a></li> 
                    </ul>
                </nav>
            </div>
        </div>   
    </header>
  );
  
}



export default Header;