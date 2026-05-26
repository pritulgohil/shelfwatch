"use client";

import { createContext, useState, useContext } from "react";

export const ReportContext = createContext(null);

const statusMap = {
  "In Stock": "c100aa57-0537-4691-8fee-4707ec1823f4",
  "Low Stock": "e94276e3-f6a2-43c1-9802-ba37ef43c20f",
  "Out of Stock": "96be1b07-e6b0-45cc-b683-fc20d74113bb",
};

export const ReportProvider = ({ children }) => {
  const [reportConfirmationPrice, setreportConfirmationPrice] = useState(null);
  const [confirmedReports, setConfirmedReports] = useState(new Set());
  const [reportsRefreshTrigger, setReportsRefreshTrigger] = useState(0);

  const submitReport = async ({
    productId,
    storeId,
    categoryId,
    stockStatus,
    price,
    imageFile,
    nickname,
  }) => {
    let imageUrl = null;

    if (imageFile) {
      const formData = new FormData();
      formData.append("imageFile", imageFile);

      const uploadRes = await fetch("/api/reports/upload-image", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error || "Upload failed");
      imageUrl = uploadData.imageUrl;
    }

    const res = await fetch("/api/reports/create-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        storeId,
        categoryId,
        statusId: statusMap[stockStatus],
        price,
        imageUrl,
        nickname: nickname || "shopper",
      }),
    });

    const result = await res.json();
    if (result.success) {
      setReportsRefreshTrigger((prev) => prev + 1);
    }
    return result;
  };

  const value = {
    reportConfirmationPrice,
    setreportConfirmationPrice,
    confirmedReports,
    setConfirmedReports,
    reportsRefreshTrigger,
    setReportsRefreshTrigger,
    submitReport,
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
