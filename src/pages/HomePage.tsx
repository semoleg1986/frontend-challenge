import { useCallback, useEffect, useState } from 'react';
import { useGetCatsQuery } from '../store/services/catsApi';
import Cards from '../components/Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setCats } from '../store/slices/catsSlice';

function HomePage() {
  const dispatch = useDispatch();
  const cats = useSelector((state: RootState) => state.cats.cats);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isFetching } = useGetCatsQuery({ page: currentPage });

  const scrollHandler = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 50
    ) {
      if (!isFetching) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }
  }, [isFetching]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [isFetching, scrollHandler]);

  useEffect(() => {
    if (data) {
      const uniqueCats = data.cats.filter(
        (newCat) => !cats.some((existingCat) => existingCat.id === newCat.id)
      );

      if (uniqueCats.length > 0) {
        dispatch(setCats([...cats, ...uniqueCats]));
      }
    }
  }, [data, dispatch, cats]);

  if (isLoading) {
    return <div>Загружаем...</div>;
  }

  return (
    <div>
      <Cards cats={cats} />
      {isFetching && <div>Загрузка...</div>}
    </div>
  );
}

export default HomePage;
