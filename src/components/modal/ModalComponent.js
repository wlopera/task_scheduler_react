import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalComponent = ({
  title,
  placeHolder,
  show,
  showModal,
  processModal,
  value,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setInputValue(value);
  }, [value, show]);

  const handleValue = (input) => {
    setDisabled(input.trim().length > 0 ? false : true);
    setInputValue((prevValue) => ({ ...prevValue, name: input }));
  };

  const handleProcess = () => {
    processModal(inputValue, type);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !disabled) {
      handleProcess();2
    } else if (e.key === "Escape") {
      showModal();
    }
  };

  const type = value['name'] !== "" ? "MODIFY" : "ADD";

  return (
    <>
      <Modal centered show={show} onHide={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="recipient-name"
              placeholder={placeHolder}
              value={inputValue.name || ""}
              onChange={(e) => handleValue(e.target.value)}
              autoFocus
              onKeyDown={handleKeyPress}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={showModal}
            className="btn btn-danger"
          >
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={handleProcess}
            disabled={disabled}
            className={disabled ? "btn btn-secondary" : "btn btn-primary"}
          >
            Procesar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
