import React from 'react'
import './Footer.css'
import logo from '../../assets/img/logo.png'
import ins from '../../assets/img/ins.png'
import telg from '../../assets/img/telg.png'
import yout from '../../assets/img/yout.png'
import face from '../../assets/img/face.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="container footerCont">
            <div className="footer_left">
                <img src={logo} alt="" />
                <h2>GIRLS IN DIGITAL</h2>
            </div>

            <div className="footer_center">
                <ul>
                    <li>О Проекте</li>
                    <li>Направления</li>
                    <li>Результаты</li>
                    <li>Контакты</li>
                </ul>
            </div>

            <div className="footer_right">
                <span>
                    <p>UZ</p>
                    <p>RU</p>
                </span>

                <ul>
                    <li><img src={ins} alt="" /></li>
                    <li><img src={telg} alt="" /></li>
                    <li><img src={yout} alt="" /></li>
                    <li><img src={face} alt="" /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer