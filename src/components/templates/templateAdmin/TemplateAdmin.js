import React, { useState } from "react";

import service from "../../../services/scheduler.service";
import { useSelector } from "react-redux";

const TemplateAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [textFooter, setTextFooter] = useState(null);

  const admin = useSelector((state) => state.adminReducer.admin);

  const deleteAllHistorical = async () => {
    if (admin) {
      setLoading(true);
      const response = await service.delete_historical();
      if (response.code === 200) {
        setParams(response.jobs.params);
      }
      setLoading(false);
      setTextFooter(response.alert);
    } else {
      setTextFooter({
        type: "ERROR",
        text: `Debe estar conectado como administrador`,
      });
    }
  };

  const deleteAllLogs = async () => {
    if (admin) {
      setLoading(true);
      const response = await service.delete_logs();
      if (response.code === 200) {
        setParams(response.jobs.params);
      }
      setLoading(false);
      setTextFooter(response.alert);
    } else {
      setTextFooter({
        type: "ERROR",
        text: `Debe estar conectado como administrador`,
      });
    }
  };

  return (
    <div className="row">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div>
                <h1 className="display-6 fw-bold">Históricos DB</h1>
              </div>
            </div>
          </div>
          <div className="card-body">
            <button
              className="btn btn-danger btn-md"
              type="button"
              onClick={deleteAllHistorical}
            >
              Borrar todos los registros
            </button>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <h1 className="display-6 fw-bold">Logs DB</h1>
            </div>
          </div>
          <div className="card-body">
            <button
              className="btn btn-danger btn-md"
              type="button"
              onClick={deleteAllLogs}
            >
              Borrar todos los registros
            </button>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
      <div className="col-md-8">
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
    </div>
  );
};

export default TemplateAdmin;
