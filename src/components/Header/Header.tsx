import { NavLink } from 'react-router-dom';
import { FAVS_PAGE, ROOT_PAGE } from '../../router';
import './Header.module.css';

const Header = () => {
  return (
    <header>
      <NavLink to={ROOT_PAGE}>Все котики</NavLink>
      <NavLink to={FAVS_PAGE}>Любимые котики</NavLink>
    </header>
  );
};

export default Header;
