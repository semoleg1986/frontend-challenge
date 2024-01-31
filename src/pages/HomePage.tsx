import { useGetCatsQuery } from '../store/services/catsApi';
import Cards from '../components/Cards/Cards';

function HomePage() {
  const { data, isLoading } = useGetCatsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }
  return (
    <div>
      <Cards cats={data?.cats || []} />
    </div>
  );
}

export default HomePage;
