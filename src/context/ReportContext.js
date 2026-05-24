"use client";

import { createContext, useState, useContext } from "react";

export const ReportContext = createContext(null);

export const ReportProvider = ({ children }) => {
  const [reportConfirmation, setreportConfirmation] = useState(null);
  const [reportConfirmationPrice, setreportConfirmationPrice] = useState(null);
  const [confirmedReports, setConfirmedReports] = useState(new Set());

  const value = {
    reportConfirmation,
    setreportConfirmation,
    reportConfirmationPrice,
    setreportConfirmationPrice,
    confirmedReports,
    setConfirmedReports,
  };

  return (
    <ReportContext.Provider value={value}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReportContext = () => {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error("useReportContext must be used within a ReportProvider");
  }
  return context;
};
