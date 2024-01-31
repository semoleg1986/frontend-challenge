import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Cards from '../components/Cards/Cards';

function FavsPage() {
  const favs = useSelector((state: RootState) => state.favs);
  return (
    <div>
      {favs.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div>
          <Cards cats={favs} />
        </div>
      )}
    </div>
  );
}

export default FavsPage;
