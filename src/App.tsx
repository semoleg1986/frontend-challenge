import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import FavsPage from './pages/FavsPage';
import NotFoundPage from './pages/NotFoundPage';
import { FAVS_PAGE, NOT_FOUND_PAGE } from './router';

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={FAVS_PAGE} element={<FavsPage />} />
        <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
export default App;
