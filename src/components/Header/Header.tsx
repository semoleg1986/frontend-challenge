import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
  FAVS_PAGE,
  NOT_FOUND_PAGE,
  ROOT_PAGE,
  TITLE_FAVS_PAGE,
  TITLE_NOT_FOUND_PAGE,
  TITLE_ROOT_PAGE,
} from '../../router';
import './Header.module.css';

const Header = () => {
  return (
    <header>
      <h1>
        <Routes>
          <Route path={ROOT_PAGE} element={TITLE_ROOT_PAGE} />
          <Route path={FAVS_PAGE} element={TITLE_FAVS_PAGE} />
          <Route path={NOT_FOUND_PAGE} element={TITLE_NOT_FOUND_PAGE} />
        </Routes>
      </h1>
      <NavLink to={ROOT_PAGE}>Home</NavLink>
      <NavLink to={FAVS_PAGE}>Favorites</NavLink>
    </header>
  );
};

export default Header;
