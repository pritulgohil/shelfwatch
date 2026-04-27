// import React from "react";
// import styles from "./PriceCard.module.css";
// import { Button } from "@/components/ui/button";
// import { ThumbsUp, ThumbsDown } from "lucide-react";

// export const PriceCard = ({ currentProductDisplay }) => {
//   console.log("Test", currentProductDisplay);
//   if (!currentProductDisplay) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className={styles.priceCard}>
//       <div className={styles.priceHeader}>Reported Price</div>
//       <div className={styles.productPrice}>
//         $
//         {currentProductDisplay.reports?.at(-1)?.price
//           ? currentProductDisplay.reports?.at(-1)?.price
//           : "--"}
//       </div>
//       <div className={styles.priceReport}>
//         <Button
//           className={`${styles.reportButton} cursor-pointer shadow-none`}
//           variant="secondary"
//           size="sm"
//         >
//           <ThumbsUp /> 12
//         </Button>
//         <Button
//           className={`${styles.reportButton} cursor-pointer shadow-none`}
//           variant="secondary"
//           size="sm"
//         >
//           <ThumbsDown /> 12
//         </Button>
//       </div>
//     </div>
//   );
// };

import React, { useMemo } from "react";
import styles from "./PriceCard.module.css";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";

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

  const latestPrice = latestReport?.price ?? "--";

  return (
    <div className={styles.priceCard}>
      <div className={styles.priceHeader}>Reported Price</div>

      <div className={styles.productPrice}>${latestPrice}</div>

      <div className={styles.priceReport}>
        <Button
          className={`${styles.reportButton} cursor-pointer shadow-none`}
          variant="secondary"
          size="sm"
        >
          <ThumbsUp /> 12
        </Button>

        <Button
          className={`${styles.reportButton} cursor-pointer shadow-none`}
          variant="secondary"
          size="sm"
        >
          <ThumbsDown /> 12
        </Button>
      </div>
    </div>
  );
};
