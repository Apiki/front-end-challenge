import api from "./api";

export const responseStatus = {
  SUCCESS: "SUCCESS",
  NOT_FOUND: "NOT_FOUND",
  ERROR: "ERROR",
};

export function useHandleRequest() {
  async function handleRequest(apiEndpoint: string, method: string, data?: any) {
    try {
      let response;

      switch (method.toUpperCase()) {
        case "GET":
          response = await api.get(apiEndpoint);
          break;
        case "POST":
          response = await api.post(apiEndpoint, data);
          break;
        case "PUT":
          response = await api.put(apiEndpoint, data);
          break;
        case "DELETE":
          response = await api.delete(apiEndpoint);
          break;
        default:
          throw new Error("Invalid HTTP method");
      }

      if (response.status >= 200 && response.status < 300) {
        return {
          status: responseStatus.SUCCESS,
          data: response.data,
          headers: response.headers, 
        };
      } else {
        throw response;
      }
    } catch (err: any) {
      return {
        status: err.response?.status === 404 ? responseStatus.NOT_FOUND : responseStatus.ERROR,
        data: err,
        headers: err.response?.headers,
      };
    }
  }

  return {
    handleRequest,
    responseStatus,
  };
}