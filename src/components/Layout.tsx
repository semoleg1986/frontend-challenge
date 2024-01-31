import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
