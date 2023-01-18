import React from 'react'
import './Proekti.css'
import proekti1 from '../../assets/img/proekte1img.png'
import proekti2 from '../../assets/img/proekte2img.png'
import proekti3 from '../../assets/img/proekte3img.png'
import proekti4 from '../../assets/img/proekte4img.png'
import csnap from '../../assets/img/csnap.png'

function Proekti() {
  return (
    <div className='proekti'>
        <div className="container">
            <div className="proekti__title">
                <h2>О проекте</h2>
            </div>

            <div className="proekti__info-1">
                <img src={proekti1} alt="" />
                <p>Организация курсов повышения квалификации для девушек специалистов в сфере ИТ   и подготовка высококвалифицированных кадров. Дать практические навыки участникам, которые пригодятся в будущей профессиональной деятельности благодаря привлечению в процесс обучения опытных ведущих отечественных и зарубежных специалистов. Создание программы для системной развитии ИТ- сферы в республике.</p>
            </div>


            <div className="proekti__info-2">
                <p>Проект “Программа обучения девушек в сфере И.Т ”  предназначен для девушек в возрасте 16-35 ,которые имеет базовые знание в сфере айти.</p>

                <img src={proekti2} alt="" />
            </div>
        </div>

            <div className="napravleni">
                <div className="container">
                <h2>Направлении</h2>
                <p>Проект будет проводится по направлениям</p>

                <ul>
                    <li>
                        <p>Программиро-вание</p>
                        <img src={csnap} alt="" />
                    </li>

                    <li>
                        <p>Программиро-вание</p>
                        <img src={csnap} alt="" />
                    </li>

                    <li>
                        <p>Программиро-вание</p>
                        <img src={csnap} alt="" />
                    </li>

                    <li>
                        <p>Программиро-вание</p>
                        <img src={csnap} alt="" />
                    </li>

                    <li>
                        <p>Программиро-вание</p>
                        <img src={csnap} alt="" />
                    </li>

                    <li>
                        <p>Программиро-вание</p>
                        <img src={csnap} alt="" />
                    </li>
                </ul>

                <button>Записаться</button>
                </div>
            </div>

        <div className="container">
            <div className="proekti__info-3">
                <img src={proekti3} alt="" />
                <p>Проект осуществляется в 4 этапа. Отбор участников проводится на основе специального анкетирования,собесодование а также анкетирование возможно на сайте проекта в режиме он-лайн. также собеседования с участием тренеров и специалистов. Привлечение участников будет производиться посредством рекламной кампании в ТВ, интернет и печатной СМИ.</p>
            </div>


            <div className="proekti__info-4">
                <p>Рабочая группа будет состоят из высококвалифицированных тренеров-специалистов. Для полного информирования участников проекта требуется освещение через СМИ, разработка сайта и создание PR-группы. Рабочей группой будут разработаны модули, программы направлений  в проекте. </p>
                <img src={proekti4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Proekti