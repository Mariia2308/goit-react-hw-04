import css from "./MainStyles.module.css"



export default function ImageCard({ photo, onClick } ) {
    return (
        <div className={css.cardWrapper} >
            <img className={css.image} src={photo.small} alt={photo.alt} onClick={() => onClick(photo.regular, photo.alt)} />
        </div>
    )
}