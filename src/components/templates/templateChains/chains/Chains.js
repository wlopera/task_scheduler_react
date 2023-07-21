import React, { useEffect, useState } from "react";

import { TITLE_CHAIN } from "../../../utils/Constants";
import service from "../../../../services/chains.service";
import ModalChains from "../../../modal/ModalChains";
import ModalParams from "../../../modal/ModalParams";

import "./Chains.css";

const Chains = ({ orderId, editButton, onLoading }) => {
  const [dataTable, setDataTable] = useState(null);
  const [row, setRow] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showParams, setShowParams] = useState(false);
  const [params, setParams] = useState([]);
  const [textFooter, setTextFooter] = useState(null);

  useEffect(() => {
    const getData = async () => {
      onLoading(true);
      const response = await service.get(orderId);
      // console.log("Consultar Tareas:", response);
      if (response.code === 200) {
        setDataTable({
          data: response.data,
          options: response.options,
          positions: response.positions,
        });
      }
      setTextFooter(response.alert);
      onLoading(false);
    };
    if (orderId === "") {
      setDataTable([]);
    } else if (orderId) {
      getData();
    }
  }, [orderId]);

  const paramRow = async (input) => {
    onLoading(true);
    handleSetShowEdit();
    const data = { order_id: orderId, job_id: input.id };

    const response = await service.getParams(data);
    if (response.code === 200) {
      setParams(response.jobs.params);
    }
    onLoading(false);
    setTextFooter(response.alert);
    setRow({...data, "name": input['name']});
    setShowParams(true);
    setSelectedRow(input.id);
  };

  const modifyRow = (input) => {
    setRow(input);
    setShowEdit(true);
    setSelectedRow(input.id);
    setTextFooter(null);
  };

  const handleSetShowParams = () => {
    setRow("");
    setShowParams(false);
  };

  const handleSetShowEdit = () => {
    setRow("");
    setShowEdit(false);
  };

  const handleProcessRow = async (data) => {
    onLoading(true);
    handleSetShowEdit();
    const position = data["position"];
    const old_position = data["old_position"];
    const newData = dataTable["data"].map((item) => {
      if (item["position"] === old_position) {
        return {
          class: data["class"],
          error: data["error"],
          id: data["id"],
          name: data["name"],
          next: data["next"],
          package: data["package"],
          position: Number(data["position"]),
        };
      } else if (item["position"] === Number(position)) {
        item["position"] = Number(old_position);
        return item;
      }
      return item;
    });

    // Ordena los red}gidtros por posicion
    const result = newData.sort(sortByPosition);

    // Eliminar el campo "position" de cada registro
    const records = result.map((record) => {
      const { position, ...records } = record;
      return records;
    });

    const response = await service.update({
      order_id: orderId,
      chains: records,
    });
    if (response.code === 200) {
      response.data.forEach((item) => {
        if (item.active) {
          setSelectedRow(item.id);
          return;
        }
      });
      setDataTable({
        data: response.data,
        options: response.options,
        positions: response.positions,
      });
    }
    setTextFooter(response.alert);
    onLoading(false);
  };

  const handleProcessParams = async (data) => {
    onLoading(true);
    handleSetShowParams();
    const request = {
      order_id: row.order_id,
      job_id: row.job_id,
      params: data["params"],
    };
    console.log("Procesar param: ", data, request);
    const response = await service.updateParams(request, row['name']);
    if (response.code === 200) {
      setParams(response.params);
    }
    setTextFooter(response.alert);
    onLoading(false);
  };

  const sortByPosition = (a, b) => {
    const positionA =
      typeof a.position === "string" ? parseInt(a.position) : a.position;
    const positionB =
      typeof b.position === "string" ? parseInt(b.position) : b.position;

    if (positionA < positionB) {
      return -1;
    }
    if (positionA > positionB) {
      return 1;
    }
    return 0;
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="row">
              <div className="col-md-12">{TITLE_CHAIN}</div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="widthClass">
            <table id="myTable" className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Posición</th>
                  <th scope="col">Tarea</th>
                  <th scope="col">Paquete</th>
                  <th scope="col">Clase</th>
                  <th scope="col">Siguiente</th>
                  <th scope="col">Error</th>
                  <th style={{ width: "100px" }}>Parámetros</th>
                  <th style={{ width: "100px" }}>Acción</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {dataTable &&
                  dataTable.data &&
                  dataTable.data.map((item) => (
                    <tr
                      key={item.id}
                      className={selectedRow === item.id ? "table-primary" : ""}
                    >
                      <td className="text-center">{item.position}</td>
                      <td className="link-success">{item.name}</td>
                      <td>{item.package}</td>
                      <td>{item.class}</td>
                      <td className="link-primary">{item.next}</td>
                      <td className="link-danger">{item.error}</td>
                      <td className="text-center">
                        {editButton && (
                          <button
                            className="btn btn-light btn-sm"
                            onClick={() => paramRow(item)}
                          >
                            <i className="bi bi-building-fill-add icon_table"></i>
                          </button>
                        )}
                      </td>
                      <td className="text-center">
                        {editButton && (
                          <button
                            className="btn btn-light btn-sm"
                            onClick={() => modifyRow(item)}
                          >
                            <i className="bi bi-pencil-square icon_table"></i>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer">
          <p
            className={
              textFooter && textFooter.type === "ERROR"
                ? "text-danger fs-6"
                : "text-primary fs-6"
            }
          >
            {textFooter ? textFooter.text : ""}
          </p>
        </div>
      </div>
      {showEdit && (
        <ModalChains
          show={showEdit}
          showModal={handleSetShowEdit}
          processModal={handleProcessRow}
          row={row}
          options={dataTable.options}
          positions={dataTable.positions}
        />
      )}
      {showParams && (
        <ModalParams
          show={showParams}
          showModal={handleSetShowParams}
          processModal={handleProcessParams}
          params={params}
          row={row}
          options={dataTable.options}
          positions={dataTable.positions}
        />
      )}
    </div>
  );
};

export default Chains;
