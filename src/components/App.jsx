

import { useState, useEffect } from 'react';
import './App.css';
import ImageGallery  from './ImageGallery';
import { getPhotos } from '../services/photos';
import ImageModal from './ImageModal';
import SearchBar from './SearchBar';
import Loader from './Loader';
import Error from './Error';
import LoadMoreBtn from './LoadMoreBtn';




export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [modalUrl, setModalUrl] = useState('')
  const [modalAlt, setModalAlt] = useState('')


  const onSubmit = query => {
    setPage(1);
    setPhotos([]);
    setTotalResults(0);
    setQuery(query);
  };

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await getPhotos(query, page);
        setTotalResults(response.totalPhotos);
        setPhotos(oldPhotos => [...oldPhotos, ...response.photos]);
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
  const handleCardClick = (imgUrl, imgAlt) => {
        setModalUrl(imgUrl)
        setModalAlt(imgAlt)
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }
  

  return (
    <div>
      <SearchBar onSubmit={onSubmit}  />
      
      <ImageGallery photos={photos} onClick={handleCardClick} />
      {photos.length < totalResults && (
        <LoadMoreBtn onClick={onClick} buttonText = 'Load more'/>
      )}
      {<Loader loading = {loading} />}
      {error && <Error message="Ooops, smth went wrong" />}
      <ImageModal onClose={handleModalClose} isOpen={isModalOpen} url={modalUrl} alt={modalAlt} />
    </div>
  );
};
export default App