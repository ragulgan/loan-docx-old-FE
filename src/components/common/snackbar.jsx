import React, { createContext, useContext, useState, useCallback } from "react";

const SnackbarContext = createContext();
export const useSnackbar = () => useContext(SnackbarContext);

const SnackbarProvider = ({ children }) => {
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    type: "info",
  });

  const enqueueSnackbar = useCallback((message, type = "info") => {
    setSnack({ open: true, message, type });
    setTimeout(() => {
      setSnack((prev) => ({ ...prev, open: false }));
    }, 4000);
  }, []);

  const handleClose = () => {
    setSnack((prev) => ({ ...prev, open: false }));
  };

  const bootstrapType = {
    success: "bg-success text-white",
    error: "bg-danger text-white",
    warning: "bg-warning text-dark",
    info: "bg-info text-white",
  }[snack.type];

  return (
    <SnackbarContext.Provider value={{ enqueueSnackbar }}>
      {children}
      {snack.open && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 9999,
            minWidth: "260px",
          }}
        >
          <div
            className={`toast show ${bootstrapType} border-0`}
            role="alert"
          >
            <div className="d-flex justify-content-between align-items-center px-3 py-2">
              <div>{snack.message}</div>
              <button
                type="button"
                className="btn-close btn-close-white ms-2"
                onClick={handleClose}
              ></button>
            </div>
          </div>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
