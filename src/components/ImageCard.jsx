import css from "./MainStyles.module.css"
import { useState } from 'react';
import ImageModal  from './ImageModal';

export const ImageCard = ({ photo: { small, alt, regular } }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={css.card}>
      <img
        className={css.cardImage}
        src={small}
        alt={alt}
        onClick={openModal}
      />

      {modalIsOpen && (
        <ImageModal
          alt={alt}
          regular={regular}
          setIsOpen={setIsOpen}
          modalIsOpen={modalIsOpen}
        />
      )}
    </div>
  );
};
export default ImageCard