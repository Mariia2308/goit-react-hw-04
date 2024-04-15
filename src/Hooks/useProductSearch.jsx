import { useEffect, useState } from 'react';
import { getPhotos } from '../apiService/photos';

export const usePhotoSearch = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const onSubmit = query => {
    setPage(1);
    setPhotos([]);
    setTotalResults(0);
    setQuery(query);
    if (query === '') {
      console.error('Write something to start searching');
    }
  };

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(false);

    const fetchData = async () => {
      try {
        const resp = await getPhotos(query, page);
        setTotalResults(resp.totalPhotos);
        setPhotos(oldPhotos => [...oldPhotos, ...resp.photos]);
      } catch (err) {
        console.error(err.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const onClick = () => {
    setPage(page + 1);
  };

  return { photos, loading, error,totalResults, onSubmit, onClick };
};
