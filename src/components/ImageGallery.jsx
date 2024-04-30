import css from "./MainStyles.module.css"
import ImageCard from './ImageCard'

export const ImageGallery = ({ photos, onClick}) => {
  return (
    <ul className={css.gallery}>
      {photos && photos.map(photo => {
        return (
          <li key={photo.id}>
          <ImageCard photo={photo} onClick={(imgUrl, imgAlt) => onClick(imgUrl, imgAlt)} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery