import React from 'react';
import linkIcon from './../../images/link_icon.svg';
import myPhoto from './../../images/my-photo.jpg';

function AboutMe(props) {

  return (
    <section
      className="about-me"
      id="about-me"
    >
      <div
        className="about-me__container">
        <h2 className="about-me__header">Студент</h2>
        <div className="line"/>
        <div className="about-me__photo-container">
          <img className="about-me__photo" alt="Фото студента" src={myPhoto}/>
        </div>
        <h3 className="about-me__subheader">Илья</h3>
        <p className="about-me__info">Системный аналитик, 25 лет.</p>
        <article className="about-me__article">Родился в Москве. Женат. Бакалавр по направлению экономика (РУТ, МИИТ).
          Магистр по направлению менеджмент (РУТ, МИИТ). 5,5 лет проработал в ООО&nbsp;"Сервис-телематика" в том числе на
          таких крупных проектах, как: Платон, ЦКАД. Последние 3 года в роли Системного аналитика. Сейчас
          работаю в компании ООО&nbsp;"Софтлайн Аутсорсинг" на аналогичной позиции.
        </article>
        <a
          className="about-me__gh-link"
          href="https://github.com/ilya-stukalov"
          target="_blank">
          Github
        </a>
        <p className="about-me__list-name">Портфолио</p>
        <ul className="about-me__list">
          <li className="about-me__list-item"><p className="about-me__list-item-text">Статичный сайт</p>
            <a
              href="https://github.com/ilya-stukalov/how-to-learn"
              target="_blank">
              <img className="about-me__list-item-img" alt="Иконка ссылки" src={linkIcon}/>
            </a>
          </li>
          <li className="about-me__list-item"><p className="about-me__list-item-text">Адаптивный сайт</p>
            <a
              href="https://github.com/ilya-stukalov/russian-travel"
              target="_blank">
              <img className="about-me__list-item-img" alt="Иконка ссылки" src={linkIcon}/>
            </a>
          </li>
          <li className="about-me__list-item"><p className="about-me__list-item-text">Одностороннее приложение</p>
            <a
              href="https://github.com/ilya-stukalov/react-mesto-api-full"
              target="_blank">
              <img className="about-me__list-item-img" alt="Иконка ссылки" src={linkIcon}/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
