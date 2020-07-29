import React from "react";
import Modal from "react-modal";

// remember that 'return' can be implicit in arrow functions
const OptionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption} // !! converts string to true boolean
      onRequestClose={props.handleClearSelectedOption} // allows user to click background or press escape key to close Modal
      contentLabel="Selected Option"
      closeTimeoutMS={200} // eases out the closing of the modal
      ariaHideApp={false}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.handleClearSelectedOption}>
        Close
      </button>
    </Modal>
  );
};

export default OptionModal;
