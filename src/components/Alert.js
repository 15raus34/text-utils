import React, { useContext } from "react";
import { AlertContext } from "../context/AlertProvider";

export default function Alert() {

  const useAlertContext = useContext(AlertContext);
  const {alert} = useAlertContext;

  return (
    alert && <div className={`alert alert-${alert.type}`} role="alert">
      {alert.message}
    </div>
  );
}
