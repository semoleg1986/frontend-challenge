import { ROOT_PAGE } from '../router';
import { NavLink } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <h1>404</h1>
      <NavLink to={ROOT_PAGE}>Home</NavLink>
    </>
  );
}

export default NotFoundPage;
