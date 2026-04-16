import './Modal.scss';

const Modal = ({ children, onClose }) => {
    return (
        <div className="modal">
            <div className="modal__content">
                {children}
                <button
                    onClick={onClose}
                    type="button" 
                    className="modal__close" 
                    aria-label="Close modal"
                >
                </button>
            </div>
        </div>
    );
};

export default Modal;