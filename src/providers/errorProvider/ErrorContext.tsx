import React, { useContext, createContext } from "react";
import { Error } from "../../interfaces/error";

export interface Context {
  state: {
    error: Error;
  };
  actions: {
    openToastError: (message: String) => Promise<void>;
    closeToastError: () => Promise<void>;
  };
}

export const ErrorContext = React.createContext({} as Context);
