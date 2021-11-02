import React from 'react';

function AboutProject(props) {

  return (
    <section
      className="about-project"
      id="about-project"
    >
      <div
        className="about-project__container">
        <h2 className="about-project__header">О проекте</h2>
        <div className="line"/>
        <div
        className="about-project__text-container"
        >
          <div
            className="about-project__sub-container">
            <h3 className="about-project__subheader">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div
            className="about-project__sub-container">
            <h3 className="about-project__subheader">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>

        <div
          className="about-project__interval-container">
          <h4 className="about-project__interval-container-header about-project__interval-container-header_blue">1 неделя</h4>
          <h4 className="about-project__interval-container-header">4 недели</h4>
          <p className="about-project__interval-container-text">Back-end</p>
          <p className="about-project__interval-container-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
