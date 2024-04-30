

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
    getPhotos(query, page)
      .then(resp => {
        setTotalResults(resp.totalPhotos);
        setPhotos(oldPhotos => [...oldPhotos, ...resp.photos]);
      })
      .catch(err => {
        console.log(err.message);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  const onClick = () => {
    setPage(page + 1);
  };
  const handleCardClick = (imgUrl, imgAlt) => {
        setModalUrl(imgUrl)
        setModalAlt(imgAlt)
        setIsModalOpen(true)
    }

    // set state for closed modal
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
      {loading && <Loader />}
      {error && <Error message="Ooops, smth went wrong" />}
      <ImageModal onClose={handleModalClose} isOpen={isModalOpen} url={modalUrl} alt={modalAlt} />
    </div>
  );
};
export default App