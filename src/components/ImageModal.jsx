import Modal from 'react-modal';
import css from "./MainStyles.module.css"


function ImageModal({url, alt, isOpen, onClose}) {
    return (
        <Modal
            isOpen={isOpen}
            contentLabel='fullsize picture modal'
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            onRequestClose={onClose}
            className={css.modal}
            overlayClassName={css.overlay}
        >
            <img src={url} alt={alt} className={css.img} />
        </Modal>
    )
}

export default ImageModal
