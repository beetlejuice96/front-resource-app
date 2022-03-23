import { IconButton, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { Error } from "../../interfaces/error";
import { Context, ErrorContext } from "./ErrorContext";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  initialValues: Error;
}

const ErrorProvider: React.FC = ({ children }) => {
  const [stateError, setStateError] = useState<Error>({
    active: false,
    message: "",
  });
  const openToastError = (message: string) => {
    console.log("entro");
    setStateError({
      ...stateError,
      message: message,
      active: true,
    });
  };

  const closeToastError = () => {
    setStateError({
      active: false,
      message: "",
    });
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
      <Snackbar
        open={stateError.active}
        autoHideDuration={6000}
        onClose={closeToastError}
        message={stateError.message}
        action={button}
      />
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
