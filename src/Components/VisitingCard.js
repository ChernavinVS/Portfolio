import React from 'react';

// Импорт изображений
// import bТgImage from '../assets/Image 11.png';
// import project1Img from '../assets/Frame 32.png';
// import project2Img from '../assets/Frame 33.png';
// import project3Img from '../assets/Frame 34.png';
// import emailIcon from '../assets/Message 35.png';
// import callIcon from '../assets/Call.png';
// import telegramIcon from '../assets/Default.png';
// import whatsappIcon from '../assets/whatsapp.png';

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

     

      
    </div>
  );
};

export default VisitingCard;