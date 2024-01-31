import { useGetCatsQuery } from '../../store/services/catsApi';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavs } from '../../store/slices/favsSlice';
import { ICat } from '../../interfaces/CatInterfaces';
import { RootState } from '../../store/store';

const Cards = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetCatsQuery();
  const favs = useSelector((state: RootState) => state.favs);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  const handleAddToFavs = (cat: ICat) => {
    if (!favs.some((favCat) => favCat.id === cat.id)) {
      dispatch(addToFavs(cat));
    }
  };

  return (
    <div>
      {data.results.map((cat) => (
        <div key={cat.id}>
          <img src={cat.url} alt={`Cat ${cat.id}`} style={{ width: '100px', height: '100px' }} />
          <button
            onClick={() => handleAddToFavs(cat)}
            disabled={favs.some((favCat) => favCat.id === cat.id)}
          >
            {favs.some((favCat) => favCat.id === cat.id) ? 'Added to Favs' : 'Add to Favs'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
