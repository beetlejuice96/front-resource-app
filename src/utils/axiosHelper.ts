import { AxiosResponse, AxiosError } from "axios";

export type axiosResponse<T = any> = {
  success: true;
  statusCode: number;
  payload: T;
};

export type axiosError = {
  success: false;
  error: {
    message: string;
    code?: number;
    url?: string;
    method?: string;
  };
};

const handleError = (axiosErr: AxiosError) => {
  let errorResponse: axiosError;
  if (axiosErr.response) {
    const responseErr = axiosErr.response;
    errorResponse = {
      success: false,
      error: {
        code: responseErr.request.code,
        message: responseErr.request.statusText,
        url: responseErr.config.url,
        method: responseErr.config.method?.toUpperCase(),
      },
    };
  } else {
    errorResponse = {
      success: false,
      error: { message: "ERR_CONNECTION_REFUSED" },
    };
  }
  return errorResponse;
};

const handleResponse = (axiosRes: AxiosResponse): axiosResponse => {
  const response: axiosResponse = {
    success: true,
    statusCode: axiosRes.status,
    payload: axiosRes.data,
  };
  return response;
};

const HandlerResponse = {
  handleResponse,
  handleError,
};
export default HandlerResponse;
