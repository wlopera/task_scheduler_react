import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import uuid from "react-uuid";

import "./ModalParams.css";

const ModalParams = ({ show, showModal, processModal, params, row, type }) => {
  const [data, setData] = useState([]);
  const [fileParams, setFileParams] = useState([]);

  useEffect(() => {
    const records = params.map((param) => [
      { name: "ID-" + uuid(), value: param.name, type: "NAME" },
      { name: "ID-" + uuid(), value: param.value, type: "VALUE" },
    ]);
    setData(records);
  }, [params, show]);

  useEffect(() => {
    getFileParams();
  }, [data]);

  const handleChange = (input) => {
    const { name, value } = input.target;

    const records = data.map((item) => {
      if (name === item[0].name) {
        item[0].value = value;
      }
      if (name === item[1].name) {
        item[1].value = value;
      }
      return item;
    });
    setData(records);
  };

  const addRow = () => {
    setData((prevData) => [
      ...prevData,
      [
        { name: "ID-" + uuid(), value: "", type: "NAME" },
        { name: "ID-" + uuid(), value: "", type: "VALUE" },
      ],
    ]);
  };

  const removeRow = (id) => {
    setData((prevData) => {
      const records = [];
      prevData.forEach((item) => {
        if (item[0].name !== id) {
          records.push(item);
        }
      });
      return records;
    });
  };

  const getFileParams = () => {
    const output = [];
    data.forEach((item) =>
      output.push({
        name: item[0].value,
        value: item[1].value,
      })
    );

    setFileParams(JSON.stringify(output, null, 2));
    return { params: output };
  };

  const handleProcess = () => {
    if (type === "PARAMS") {
      processModal(getFileParams());
      return;
    }
    processModal({ params: JSON.parse(fileParams) });
  };

  // Función para manejar el evento onChange del textarea
  const handleUpdateParams = (event) => {
    setFileParams(event.target.value);
  };

  return (
    <>
      <Modal
        centered
        show={show}
        onHide={showModal}
        dialogClassName="modal-dialog"
      >
        <Modal.Header>
          <Modal.Title>{`Parámetros: ${row["name"]}`}</Modal.Title>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-light btn-sm ml-2 "
              onClick={() => addRow()}
            >
              <i className="bi bi-plus-square-fill icon_table"></i>
            </button>
          </div>
        </Modal.Header>
        <Modal.Body className="heightMaxModalParams">
          <div className="mb-3">
            <div className="tab-content" id="pills-tabContent">
              {type === "PARAMS" ? (
                <table id="myTable" className="table table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">Nombre</th>
                      <th className="text-center">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name={item[0].name}
                              value={item[0].value}
                              onChange={(e) => handleChange(e)}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              name={item[1].name}
                              value={item[1].value}
                              onChange={(e) => handleChange(e)}
                            />
                          </td>
                          <td>
                            <button
                              className="btn btn-light btn-sm"
                              onClick={() => {
                                removeRow(item[0].name);
                              }}
                            >
                              <i className="bi bi-trash-fill icon_table"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              ) : (
                <textarea
                  cols="800"
                  rows="20"
                  value={fileParams}
                  onChange={handleUpdateParams}
                ></textarea>
              )}
            </div>
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
          <Button variant="primary" onClick={handleProcess}>
            Procesar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalParams;
