// import React, { useMemo } from "react";
// import styles from "./PriceCard.module.css";
// import { Button } from "@/components/ui/button";
// import { ThumbsUp, ThumbsDown } from "lucide-react";
// import { useAppContext } from "@/context/AppContext";
// import { incrementReportConfirm } from "@/lib/supabase";

// export const PriceCard = ({ currentProductDisplay }) => {
//   if (!currentProductDisplay) {
//     return <div>Loading...</div>;
//   }

//   const latestReport = useMemo(() => {
//     const reports = currentProductDisplay.reports || [];
//     if (!reports.length) return null;

//     return [...reports].sort(
//       (a, b) => new Date(b.created_at) - new Date(a.created_at),
//     )[0];
//   }, [currentProductDisplay.reports]);

//   const latestPrice = latestReport?.price ?? "--";
//   const {
//     reportConfirmation,
//     setreportConfirmation,
//     reportConfirmationPrice,
//     setreportConfirmationPrice,
//   } = useAppContext();

//   const handleReportConfirmation = () => {
//     setreportConfirmation(currentProductDisplay.reports[0].id);
//     setreportConfirmationPrice(currentProductDisplay.reports[0].price);
//   };
//   console.log("reportConfirmation", reportConfirmation);
//   console.log(
//     "currentProductDisplay.reports[0].id",
//     currentProductDisplay.reports[0].id,
//   );
//   console.log("reportConfirmationPrice", reportConfirmationPrice);
//   console.log(
//     "currentProductDisplay.reports[0].price",
//     currentProductDisplay.reports[0].price,
//   );
//   return (
//     <div className={styles.priceCard}>
//       <div className={styles.priceHeader}>Reported Price</div>

//       <div className={styles.productPrice}>${latestPrice}</div>

//       <div className={styles.priceReport}>
//         <Button
//           className={`${styles.reportButton} ${reportConfirmation === currentProductDisplay.reports[0].id || reportConfirmationPrice === currentProductDisplay.reports[0].price ? styles.confirmed : ""} cursor-pointer shadow-none`}
//           variant="secondary"
//           size="sm"
//           onClick={handleReportConfirmation}
//           disabled={
//             reportConfirmation === currentProductDisplay.reports[0].id ||
//             reportConfirmationPrice === currentProductDisplay.reports[0].price
//           }
//         >
//           <ThumbsUp />{" "}
//           {reportConfirmation === currentProductDisplay.reports[0].id ||
//           reportConfirmationPrice === currentProductDisplay.reports[0].price
//             ? "Confirmed"
//             : "Confirm"}
//         </Button>
//         <div className={styles.reportConfirmationsCounter}>197 Confirmed</div>
//       </div>
//     </div>
//   );
// };

// import React, { useMemo } from "react";
// import styles from "./PriceCard.module.css";
// import { Button } from "@/components/ui/button";
// import { ThumbsUp } from "lucide-react";
// import { useAppContext } from "@/context/AppContext";
// import { incrementReportConfirm } from "@/lib/database/reports/reports";

// export const PriceCard = ({ currentProductDisplay }) => {
//   if (!currentProductDisplay) {
//     return <div>Loading...</div>;
//   }

//   const latestReport = useMemo(() => {
//     const reports = currentProductDisplay.reports || [];
//     if (!reports.length) return null;

//     return [...reports].sort(
//       (a, b) => new Date(b.created_at) - new Date(a.created_at),
//     )[0];
//   }, [currentProductDisplay.reports]);

//   const report = latestReport;

//   // ✅ SET-BASED PERSISTENT STATE
//   const { confirmedReports, setConfirmedReports } = useAppContext();

//   const isConfirmed = confirmedReports?.has(report?.id);

//   const handleReportConfirmation = async () => {
//     if (!report || isConfirmed) return;

//     // add to Set (persistent across products)
//     setConfirmedReports((prev) => {
//       const updated = new Set(prev);
//       updated.add(report.id);
//       return updated;
//     });

//     const result = await incrementReportConfirm(report.id);

//     console.log("incrementReportConfirm result", result);

//     if (!result.success) {
//       // rollback if failed
//       setConfirmedReports((prev) => {
//         const updated = new Set(prev);
//         updated.delete(report.id);
//         return updated;
//       });
//     }
//   };

//   return (
//     <div className={styles.priceCard}>
//       <div className={styles.priceHeader}>Reported Price</div>

//       <div className={styles.productPrice}>${report?.price ?? "--"}</div>

//       <div className={styles.priceReport}>
//         <Button
//           className={`${styles.reportButton} ${
//             isConfirmed ? styles.confirmed : ""
//           } cursor-pointer shadow-none`}
//           variant="secondary"
//           size="sm"
//           onClick={handleReportConfirmation}
//           disabled={isConfirmed}
//         >
//           <ThumbsUp />
//           {isConfirmed ? "Confirmed" : "Confirm"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// import React, { useMemo } from "react";
// import styles from "./PriceCard.module.css";
// import { Button } from "@/components/ui/button";
// import { ThumbsUp } from "lucide-react";
// import { useAppContext } from "@/context/AppContext";

// export const PriceCard = ({ currentProductDisplay }) => {
//   if (!currentProductDisplay) {
//     return <div>Loading...</div>;
//   }

//   const latestReport = useMemo(() => {
//     const reports = currentProductDisplay.reports || [];
//     if (!reports.length) return null;

//     return [...reports].sort(
//       (a, b) => new Date(b.created_at) - new Date(a.created_at),
//     )[0];
//   }, [currentProductDisplay.reports]);

//   const report = latestReport;

//   // ✅ persistent UI state (survives product switching)
//   const { confirmedReports, setConfirmedReports } = useAppContext();

//   const isConfirmed = confirmedReports?.has(report?.id);

//   const handleReportConfirmation = async () => {
//     if (!report || isConfirmed) return;

//     // optimistic update
//     setConfirmedReports((prev) => {
//       const updated = new Set(prev);
//       updated.add(report.id);
//       return updated;
//     });

//     try {
//       const res = await fetch(`/api/reports/price-confirm/${report.id}`, {
//         method: "POST",
//       });

//       const data = await res.json();

//       console.log("confirm API result:", data);
//       console.log("report.id:", report.id);

//       if (!data.success) {
//         // rollback if failed
//         setConfirmedReports((prev) => {
//           const updated = new Set(prev);
//           updated.delete(report.id);
//           return updated;
//         });
//       }
//     } catch (error) {
//       console.error("Confirm error:", error);

//       // rollback on network error
//       setConfirmedReports((prev) => {
//         const updated = new Set(prev);
//         updated.delete(report.id);
//         return updated;
//       });
//     }
//   };

//   return (
//     <div className={styles.priceCard}>
//       <div className={styles.priceHeader}>Reported Price</div>

//       <div className={styles.productPrice}>${report?.price ?? "--"}</div>

//       <div className={styles.priceReport}>
//         <Button
//           className={`${styles.reportButton} ${
//             isConfirmed ? styles.confirmed : ""
//           } cursor-pointer shadow-none`}
//           variant="secondary"
//           size="sm"
//           onClick={handleReportConfirmation}
//           disabled={isConfirmed}
//         >
//           <ThumbsUp />
//           {isConfirmed ? "Confirmed" : "Confirm"}
//         </Button>
//         <div className={styles.confirmBadge}>
//           {report.confirmation_counter} confirmed
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useMemo, useState, useEffect } from "react";
import styles from "./PriceCard.module.css";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export const PriceCard = ({ currentProductDisplay }) => {
  if (!currentProductDisplay) {
    return <div>Loading...</div>;
  }

  const latestReport = useMemo(() => {
    const reports = currentProductDisplay.reports || [];
    if (!reports.length) return null;

    return [...reports].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at),
    )[0];
  }, [currentProductDisplay.reports]);

  const report = latestReport;

  // persistent UI state (survives product switching)
  const { confirmedReports, setConfirmedReports } = useAppContext();

  const isConfirmed = confirmedReports?.has(report?.id);

  // 🔥 LOCAL LIVE COUNTER
  const [liveCount, setLiveCount] = useState(report?.confirmation_counter || 0);

  // sync when switching products
  useEffect(() => {
    setLiveCount(report?.confirmation_counter || 0);
  }, [report?.id, report?.confirmation_counter]);

  const handleReportConfirmation = async () => {
    if (!report || isConfirmed) return;

    // optimistic UI update (Set)
    setConfirmedReports((prev) => {
      const updated = new Set(prev);
      updated.add(report.id);
      return updated;
    });

    // optimistic counter update
    setLiveCount((prev) => prev + 1);

    try {
      const res = await fetch(`/api/reports/price-confirm/${report.id}`, {
        method: "POST",
      });

      const data = await res.json();

      console.log("confirm API result:", data);
      console.log("report.id:", report.id);

      if (!data.success) {
        // rollback Set
        setConfirmedReports((prev) => {
          const updated = new Set(prev);
          updated.delete(report.id);
          return updated;
        });

        // rollback counter
        setLiveCount((prev) => Math.max(prev - 1, 0));
      }
    } catch (error) {
      console.error("Confirm error:", error);

      // rollback Set
      setConfirmedReports((prev) => {
        const updated = new Set(prev);
        updated.delete(report.id);
        return updated;
      });

      // rollback counter
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
