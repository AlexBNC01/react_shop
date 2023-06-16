import './form.css'


const Form = () =>{
    return(

        <div>
            <div className='text'>Пожалуйста введите свои контактные данные и Ваш вопрос.</div>
            <form className='offer_form'>
                <label htmlFor="name">Ваше имя <input type="text" /></label>
                <label htmlFor="id">Ваш номер телефона, либо Telegram <input type="text" /></label>
                <label htmlFor="question">Ваш вопрос <input type="text" /></label>
            </form>
        </div>

      
    )
}

export default Form;