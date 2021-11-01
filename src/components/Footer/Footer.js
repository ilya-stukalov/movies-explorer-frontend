function Footer() {

  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
          <p className="footer__copyright">© 2021</p>
          <nav>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a
                  className="footer__link"
                  href="https://practicum.yandex.ru/"
                  target="_blank">
                Яндекс.Практикум</a>
              </li>
              <li className="footer__list-item">
                <a
                  className="footer__link"
                  href="https://github.com/ilya-stukalov"
                  target="_blank">
                Github
                </a>
              </li>
              <li className="footer__list-item">
                <a
                  className="footer__link"
                  href="https://facebook.com"
                  target="_blank">
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
      </div>
    </footer>
  );
}

export default Footer;
