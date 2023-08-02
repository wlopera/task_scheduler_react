import React, { useState } from "react";
import md5 from "md5";
import { useDispatch } from "react-redux";

import service from "../../services/auth.service";
import { updateLogin } from "../../redux/admin/Action";

const Login = ({ onClose }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [alert, setAlert] = useState(null);
  const [show, setShow] = React.useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setUser((current) => {
      current[name] = value;
      return current;
    });
    setAlert(null);
  };

  const handeSubmit = async (event) => {
    event.preventDefault();
    setAlert(null);
    localStorage.removeItem("token");
    dispatch(updateLogin(false));

    // Primer caracter se convierte a minuscula
    const res = await service.login({
      username: user.username.charAt(0).toLowerCase() + user.username.slice(1),
      password: md5(user.password),
    });

    console.log(123, res)
    if (res.data.code === 200) {
      dispatch(updateLogin(true));
      localStorage.setItem("token", res.data["token"]);
      onClose();
    } else {
      setAlert(res.data.description);
    }
  };

  const handlerClose = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="shadow-lg">
            <div className="card-body p-5">
              <h1 className="fs-4 card-title fw-bold mb-4 border-bottom">
                Autenticarse
              </h1>
              {alert && (
                <div
                  className="alert alert-danger mb-1 me-4  d-flex align-items-center"
                  style={{ height: 0 }}
                >
                  {alert}
                </div>
              )}

              <form
                className="needs-validation"
                noValidate={true}
                autoComplete="off"
                onSubmit={handeSubmit}
              >
                <div className="mb-3">
                  <label className="mb-2 text-muted" htmlFor="email">
                    Usuario
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={handleInputChange}
                    required
                    autoFocus
                  />
                  <div className="invalid-feedback">Usuario inválido</div>
                </div>

                <div className="mb-3">
                  <div className="mb-2">
                    <label className="text-muted" htmlFor="password">
                      Contraseña
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <input
                        id="password"
                        type={show ? "text" : "password"}
                        className="form-control"
                        name="password"
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-1 d-flex align-items-center">
                      <i
                        className={
                          show
                            ? "fa fa-eye-slash mr-1 ml-1"
                            : "fa fa-eye mr-1 ml-1"
                        }
                        onClick={() => setShow((current) => !current)}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-danger w-50 m-2"
                    onClick={handlerClose}
                  >
                    Salir
                  </button>
                  <button type="submit" className="btn btn-primary w-50 m-2">
                    Conectarse
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer py-3 border-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
