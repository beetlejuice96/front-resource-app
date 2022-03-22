import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { Error } from "../../interfaces/error";
import { Context, ErrorContext } from "./ErrorContext";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  initialValues: Error;
}

const ErrorProvider: React.FC<Props> = ({ initialValues, children }) => {
  const [stateError, setStateError] = useState<Error>(initialValues);
  const openToastError = (message: string) => {
    setStateError({
      ...stateError,
      message: message,
      active: !stateError.active,
    });
  };

  const closeToastError = () => {
    setStateError(initialValues);
  };

  const button = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeToastError}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  let state: Context["state"] = { error: stateError };
  let actions: Context["actions"] = {
    openToastError,
    closeToastError,
  };

  return (
    <ErrorContext.Provider value={{ state, actions }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
