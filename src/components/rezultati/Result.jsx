import React from 'react'
import './Result.css'
import resImg from '../../assets/img/resimg.png'

function Result() {
  return (
    <div className='result'>
        <div className="container resultWrap">
            <h2>Результаты</h2>
            <p>Ожидаемый результат: Подготовка квалифицированных и конкурентоспособных  кадров и разработка стартапп проектов и  среди девушек</p>

            <ul>
                <li>
                    <img src={resImg} alt="" />
                    <p>Самореализация девушек в сфере IT</p>
                </li>

                <li>
                    <img src={resImg} alt="" />
                    <p>Выбор профессии без квалификациии дипломов</p>
                </li>

                <li>
                    <img src={resImg} alt="" />
                    <p>Возможность зарабатывать дистанционно (фриланс)</p>
                </li>

                <li>
                    <img src={resImg} alt="" />
                    <p>Возможность начать свои социальные проекты в виде Старт апов</p>
                </li>

                <li>
                    <img src={resImg} alt="" />
                    <p>Маркетинговые навыки</p>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Result