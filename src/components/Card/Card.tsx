import { useDispatch, useSelector } from 'react-redux';
import { addToFavs } from '../../store/slices/favsSlice';
import { ICat } from '../../interfaces/CatInterfaces';
import { RootState } from '../../store/store';

interface CardProps {
  cat: ICat;
}

const Card: React.FC<CardProps> = ({ cat }) => {
  const dispatch = useDispatch();
  const favs = useSelector((state: RootState) => state.favs);

  const handleAddToFavs = () => {
    if (!favs.some((favCat) => favCat.id === cat.id)) {
      dispatch(addToFavs(cat));
    }
  };

  return (
    <div>
      <img src={cat.url} alt={`Cat ${cat.id}`} style={{ width: '100px', height: '100px' }} />
      <button onClick={handleAddToFavs} disabled={favs.some((favCat) => favCat.id === cat.id)}>
        {favs.some((favCat) => favCat.id === cat.id) ? 'Added to Favs' : 'Add to Favs'}
      </button>
    </div>
  );
};

export default Card;
