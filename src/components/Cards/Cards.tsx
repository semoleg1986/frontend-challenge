import { ICatResult } from '../../interfaces/CatInterfaces';
import Card from '../Card/Card';
import styles from './Cards.module.css';

const Cards: React.FC<ICatResult> = ({ cats }) => {
  return (
    <div className={styles.cardsContainer}>
      {cats.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default Cards;
