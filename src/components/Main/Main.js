import Promo from './../Promo/Promo.js';
import NavTab from  './../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';

function Main(props) {

  return (
    <main>
      <Promo>
        <NavTab>
        </NavTab>
      </Promo>
      <AboutProject />
      <Techs />
      <AboutMe />
      {/*<Portfolio>*/}
      {/*</Portfolio>*/}
    {/*  TO DO: вынести портфолио в отдельный компонент*/}

    </main>

  );
}

export default Main;
