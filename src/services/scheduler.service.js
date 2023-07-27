import http, {setAuthToken} from "./axios/http-common";

const PATH_API = "/chains";

class SchedulerService {
  delete_historical() {
    try {
      // Obtener el token de donde corresponda (por ejemplo, localStorage, contexto de autenticación, etc.)
      const token = localStorage.getItem("token");
      
      // Configurar el token en el encabezado antes de realizar la solicitud
      setAuthToken(token);
      console.log("token: ", token)
      
      return http.post(`${PATH_API}/delete_historical`).then((response) => {
        console.log("response: ", response)
        if (response.data.code === 200) {
          return {
            alert: {
              type: "SUCCESS",
              text: `Borrado de registros históricos satisfactoriamente.`,
            },
          };
        } else {
          return {
            ...response.data,
            alert: {
              type: "ERROR",
              text: `Error borrando registros históricos: [${response.data.code}]: ${response.data.message}`,
            },
          };
        }
      });
    } catch (error) {
      console.log("error: ", error)
      const errorMessage = error.response;
      return {
        data: {},
        message: {
          type: "ERROR",
          text: `Error borrando registros históricos: ${errorMessage}`,
        },
      };
    }
  }

  delete_logs() {
    try {
      return http.post(`${PATH_API}/delete_logs`).then((response) => {
        if (response.data.code === 200) {
          return {
            alert: {
              type: "SUCCESS",
              text: `Borrado de registros logs satisfactoriamente.`,
            },
          };
        } else {
          return {
            ...response.data,
            alert: {
              type: "ERROR",
              text: `Error borrando registros logs : [${response.data.code}]: ${response.data.message}`,
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
          text: `Error borrando registros logs: ${errorMessage}`,
        },
      };
    }
  }
}

export default new SchedulerService();
