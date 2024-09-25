import './Modal.css'

function Modal({clickedCancelDelete, clickedConfirmDelete, title}) {
    return (
        <div>
            <div className="modal">
                <p className="modal__title">{title}</p>
                <div className="modal__buttons">
                    <button className="btn btn__cancel" onClick={clickedCancelDelete}>Cancel</button>
                    <button className="btn" onClick={clickedConfirmDelete}>Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </div>
    )
}

export default Modal