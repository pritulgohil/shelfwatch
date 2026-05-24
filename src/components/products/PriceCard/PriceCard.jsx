import React, { useMemo, useState, useEffect } from "react";
import styles from "./PriceCard.module.css";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { useReportContext } from "@/context/ReportContext";

export const PriceCard = ({ currentProductDisplay }) => {
  const { confirmedReports, setConfirmedReports } = useReportContext();

  const latestReport = useMemo(() => {
    const reports = currentProductDisplay?.reports || [];
    if (!reports.length) return null;

    return [...reports].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at),
    )[0];
  }, [currentProductDisplay?.reports]);

  const report = latestReport;

  const isConfirmed = confirmedReports?.has(report?.id);

  const [liveCount, setLiveCount] = useState(report?.confirmation_counter || 0);

  useEffect(() => {
    setLiveCount(report?.confirmation_counter || 0);
  }, [report?.id, report?.confirmation_counter]);

  if (!currentProductDisplay) {
    return <div>Loading...</div>;
  }

  const handleReportConfirmation = async () => {
    if (!report || isConfirmed) return;

    setConfirmedReports((prev) => {
      const updated = new Set(prev);
      updated.add(report.id);
      return updated;
    });

    setLiveCount((prev) => prev + 1);

    try {
      const res = await fetch(`/api/reports/price-confirm/${report.id}`, {
        method: "POST",
      });

      const data = await res.json();

      console.log("confirm API result:", data);
      console.log("report.id:", report.id);

      if (!data.success) {
        setConfirmedReports((prev) => {
          const updated = new Set(prev);
          updated.delete(report.id);
          return updated;
        });

        setLiveCount((prev) => Math.max(prev - 1, 0));
      }
    } catch (error) {
      console.error("Confirm error:", error);

      setConfirmedReports((prev) => {
        const updated = new Set(prev);
        updated.delete(report.id);
        return updated;
      });

      setLiveCount((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className={styles.priceCard}>
      <div className={styles.priceHeader}>Reported Price</div>

      <div className={styles.productPrice}>${report?.price ?? "--"}</div>

      <div className={styles.priceReport}>
        <Button
          className={`${styles.reportButton} ${
            isConfirmed ? styles.confirmed : ""
          } cursor-pointer shadow-none`}
          variant="secondary"
          size="sm"
          onClick={handleReportConfirmation}
          disabled={isConfirmed}
        >
          <ThumbsUp />
          {isConfirmed ? "Confirmed" : "Confirm"}
        </Button>

        <div className={styles.confirmBadge}>{liveCount} confirmed</div>
      </div>
    </div>
  );
};
