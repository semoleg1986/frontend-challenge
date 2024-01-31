import { useDispatch, useSelector } from 'react-redux';
import { addToFavs, removeFromFavsById } from '../../store/slices/favsSlice';
import { ICat } from '../../interfaces/CatInterfaces';
import { RootState } from '../../store/store';
import { GrFavorite } from 'react-icons/gr';
import { FaHeart } from 'react-icons/fa';
import styles from './Card.module.css';
import { useState } from 'react';

interface CardProps {
  cat: ICat;
}

const Card: React.FC<CardProps> = ({ cat }) => {
  const dispatch = useDispatch();
  const favs = useSelector((state: RootState) => state.favs);

  const [hovered, setHovered] = useState(false);

  const handleAddToFavs = () => {
    if (favs.some((favCat) => favCat.id === cat.id)) {
      dispatch(removeFromFavsById(cat.id));
    } else {
      dispatch(addToFavs(cat));
    }
  };

  const isFavorite = favs.some((favCat) => favCat.id === cat.id);

  return (
    <div className={styles.cardContainer}>
      <img src={cat.url} alt={`Cat ${cat.id}`} className={styles.catImage} />
      <div
        onClick={handleAddToFavs}
        className={`${styles.favoriteIcon} ${isFavorite && styles.favorite}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? <FaHeart /> : isFavorite ? <FaHeart /> : <GrFavorite />}
      </div>
    </div>
  );
};

export default Card;
