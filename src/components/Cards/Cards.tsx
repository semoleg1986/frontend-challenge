import { useGetCatsQuery } from '../../store/services/catsApi';
import Card from '../Card/Card';

const Cards = () => {
  const { data, isLoading } = useGetCatsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      {data.results.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default Cards;
