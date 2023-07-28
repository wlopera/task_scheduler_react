import http from "./axios/http-common";

const PATH_API = "/auth";

class AuthService {
  login(data) {
    try {
      return http.post(`${PATH_API}/login`, data).then((response) => {
        if (response.data.code === 200) {
          //console.log("Login:", response);
          if (response.data.data.length > 0) {
            return {
              ...response.data,
              alert: {
                type: "SUCCESS",
                text: `Usuario conectado satisfactoriamente.`,
              },
            };
          } else {
            return {
              ...response.data,
              alert: {
                type: "SUCCESS",
                text: `No usuario no disponible`,
              },
            };
          }
        } else {
          return {
            ...response.data,
            alert: {
              type: "ERROR",
              text: `Error consultando usuario [${response.data.code}]: ${response.data.message}`,
            },
          };
        }
      });
    } catch (error) {
      const errorMessage = error.response;
      return {
        data: response.data,
        message: {
          type: "ERROR",
          text: `Error cargando usuario: ${errorMessage}`,
        },
      };
    }
  }
}

export default new AuthService();
