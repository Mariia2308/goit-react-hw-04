import Modal from 'react-modal';

function ImageModal({regular, setIsOpen, modalIsOpen, alt}) {
    function closeModal() {
    setIsOpen(false);
  }
  return (
      <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
      <img src = {regular} alt = {alt} onClick={closeModal} />

      </Modal>
      
    </div>
  )
}

export default ImageModal
