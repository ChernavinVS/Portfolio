import React from 'react';

// Импорт изображений
// import bТgImage from '../assets/Image 11.png';
import project1Img from '../assets/Frame 32.png';
import project2Img from '../assets/Frame 33.png';
import project3Img from '../assets/Frame 34.png';
import emailIcon from '../assets/Message 35.png';
import callIcon from '../assets/Call.png';
import telegramIcon from '../assets/Default.png';
import whatsappIcon from '../assets/whatsapp.png';

// Импорт CSS для стилизации компонента
import './VisitingCard.css';

const VisitingCard = () => {
  return (
    <div className="container">
      {/* Верхняя часть с фоном и заголовками */}
      <div className="header-section">
        <div className="header-top">
          <h5>Проектирование</h5>
          <h5>Разработка</h5>
          <h5>Эксплуатация</h5>
        </div>
        <div className="main-title">
          <h1>
            <span className="highlight">Проектирование</span> и разработка <br /> средств{' '}
            <span className="highlight">автоматизации</span> производств <span className="highlight">и технологических</span> <br /> процессов
          </h1>
        </div>
        <div className="header-bottom">
          <h5>Наладка</h5>
          <h5>Сопровождение</h5>
        </div>
      </div>

      {/* Основной контент */}
      <div className="content-section">
        {/* Реализованные проекты */}
        <h1>
          Реализованные проекты <br /> <span className="highlight"> в области автоматизации</span>
        </h1>
        <div className="projects">
          {/* Проект 1 */}
          <div className="project-box img">
            <img src={project1Img} alt="Проект 1" />
            <p>
              разработка тележки на колесах илона<br />
              для перемещения отрпботанного ядерного<br />
              топлива для НИЦ ПИЯФ
            </p>
          </div>
          {/* Проект 2 */}
          <div className="project-box">
            <img src={project2Img} alt="Проект 2" />
            <p>
              Телемеханизация объектов энергетики<br />
              норильского промышленного района для НТЭК
            </p>
          </div>
          {/* Проект 3 */}
          <div className="project-box">
            <img src={project3Img} alt="Проект 3" />
            <p>
              Подготовка проектной, исполнительной<br />
              и отчетной документации на АСУ ТП
            </p>
          </div>
        </div>

        {/* Контактные данные */}
        <h1>
          <span className="highlight">Контактные</span> данные
        </h1>
        <div className="contacts">
          {/* Электронная почта и телефон */}
          <div className="contact-info">
            <div className="contact-item">
              <img src={emailIcon} alt="Email" />
              <span>vladimir-chernavin@rambler.ru</span>
            </div>
            <div className="contact-item">
              <img src={callIcon} alt="Phone" />
              <span>8(927)9870724</span>
            </div>
          </div>
          {/* Год */}
          <div className="year">2025</div>
          {/* Соцсети */}
          <div className="social-icons">
            <div className="social-item">
              <span>telegramm</span>
              <img src={telegramIcon} alt="Telegram" />
            </div>
            <div className="social-item">
              <span>whatsapp</span>
              <img src={whatsappIcon} alt="WhatsApp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitingCard;