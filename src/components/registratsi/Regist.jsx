import React from 'react'
import './Regist.css'

function Regist() {
  return (
    <div className='regist'>
        <div className="container registForm">
            <h2 className='registTitle'>Регистрация</h2>

            <form action="#">
                <span>
                    <label htmlFor="ism">Имя</label>
                    <input type='text' id='ism'></input>
                </span>
                
                <span>
                    <label htmlFor="familiya">Фамилия</label>
                    <input type='text' id='familiya'></input>
                </span>

                <span>
                    <label htmlFor="tugilganSana">Дата рождения</label>
                    <input type='number' id='tugilganSana'></input>
                </span>

                <span>
                    <label htmlFor="email">Почта</label>
                    <input type='email' id='email'></input>
                </span>

                <span>
                    <label htmlFor="manzil">Адрес</label>
                    <input type='text' id='manzil'></input>
                </span>

                <span>
                    <label htmlFor="telefon">Телефон</label>
                    <input type='number' id='telefon'></input>
                </span>
 

                <span>
                    <button type='submit'>Отправить</button>
                </span>
            </form>
        </div>
    </div>
  )
}

export default Regist