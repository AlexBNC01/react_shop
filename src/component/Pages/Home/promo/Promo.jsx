import "./promo.css";
// import promoImg from "./../../img/icons/lv.svg";
import promoImg2 from "./../../../../img/icons/lv22.svg";
import promoImgBack from "./../../../../img/icons/lv23.svg";
const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo_content">
          <div className="promo_text">
            <div className="promo_title">
              <p>Аутентификация высокого уровня каждого товара.</p>
            </div>
            <div className="promo_desc">
              <p className="promo_p">
                Вместе с нами вы можете купить, продать либо отреставрировать.
              </p>
              <p> <a href="/about" className="promo_phref">Подробнее тут</a></p>
            </div>
          </div>
          <div className="promo_img">
            <div className="lv22">
              {/* <img src={promoImg} alt="img" /> */}
              <img className="back-img" src={promoImgBack} alt="img" />
              <img className="front-img" src={promoImg2} alt="img2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
