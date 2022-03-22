import React, { useContext, createContext } from "react";
import { Error } from "../../interfaces/error";

export interface Context {
  state: {
    error: Error;
  };
  actions: {
    openToastError: (message: string) => void;
    closeToastError: () => void;
  };
}

export const ErrorContext = React.createContext({} as Context);
