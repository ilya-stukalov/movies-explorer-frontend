import Promo from './../Promo/Promo.js';
import NavTab from  './../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main() {

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
    {/*  TO DO: вынести портфолио в отдельный компонент*/}

    </main>

  );
}

export default Main;
