import { useState } from "react";
import { Error } from "../../interfaces/error";
import { ErrorContext } from "./ErrorContext";

interface Props {
  initialValues: Error;
}

//https://github.dev/beetlejuice96/challenge-galicia-seguros/tree/withMUI
//https://github.dev/goncy/pency
const ErrorProvider: React.FC<Props> = ({ initialValues, children }) => {
  const [stateError, setStateError] = useState(Error);
  const openToastError = (message: string) => {
    setStateError({
      ...stateError,
      message: message,
      active: !stateError.active,
    });
  };

  return (
    <ErrorContext.Provider value={{ state, actions }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
