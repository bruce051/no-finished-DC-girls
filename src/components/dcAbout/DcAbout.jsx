import React from 'react'
import './DcAbout.css'
import webworld from '../../assets/img/webworld.png'
import tel from '../../assets/img/tel.png'
import message from '../../assets/img/message.png'
import location from '../../assets/img/location.png'

function DcAbout() {
  return (
    <div className='dcAbout'>
        <div className="container dcCont">

          <div className="dcCont">
                <div className="dcAbout_left">
                    <ul>

                      <li>
                        <img src={webworld} alt="" />

                        <span>
                          <h2>Веб сайт</h2>
                          <p>digitalcity.uz</p>
                        </span>
                      </li>

                      <li>
                        <img src={tel} alt="" />

                        <span>
                          <h2>Телефон</h2>
                          <p>+99874 222-22-22</p>
                        </span>
                      </li>

                      <li>
                        <img src={message} alt="" />

                        <span>
                          <h2>Почта</h2>
                          <p>dcity@info.com</p>
                        </span>
                      </li>

                      <li>
                        <img src={location} alt="" />

                        <span>
                          <h2>Адресс</h2>
                          <p>улица Бобур Шох, Andizhan, Узбекистан</p>
                        </span>
                      </li>

                    </ul>
                </div>
    
                <div className="dcAbout_right"></div>
          </div>

        </div>
    </div>
  )
}

export default DcAbout