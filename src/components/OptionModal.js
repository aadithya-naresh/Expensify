import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#app')

const OptionModal = (props)=>(
    <Modal
    isOpen={!!props.modalIsOpen}
    contentLabel="Option selected"
    onRequestClose={props.modalIsClosed}
    closeTimeoutMS={200}
    className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        <div> Are you sure you want to delete this expense ?</div>
        <button className=" button button--Modal " onClick={props.handleYes}>Yes</button>
        <button className=" button button--Modal " onClick={props.modalIsClosed}> No </button>
    </Modal>
)

export default OptionModal