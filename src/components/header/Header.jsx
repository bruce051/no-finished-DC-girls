import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo.png';
import herobg from '../../assets/img/heroimg.png';
function Header() {
  return (
    <div className='header'>
         <div className="container">
            <nav>
              <div className="nav__left">
                 <img src={logo} alt="" />
                 <h1>Girls in Digital </h1>
              </div>


              <div className="nav__right">

                  <ul>
                    <li>О Проекте</li>
                    <li>Направления</li>
                    <li>Задачи</li>
                    <li>Результаты</li>
                    <li>Контакты</li>
                  </ul>

                  <select defaultValue={'RU'}>
                     <option value="UZ">UZ</option>
                     <option value="RU">RU</option>
                     <option value="EN">EN</option>
                  </select>

                  <button>Регистрация</button>
              </div>
            </nav>

            <div className="hero">
               <div className="hero__left">
                  <h2>“Girls in digital”</h2>
                  <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ  
                  и подготовка высококвалифицированных кадров</p>
                  <button>Подробнее</button>
               </div>

               <div className="hero__right">
                   <img src={herobg} alt="" />
               </div>
            </div>
         </div>
    </div>
  )
};
export default Header;