// import React from "react";
// import styles from "./ProductOverview.module.css";
// import Image from "next/image";
// import { User, Clock } from "lucide-react";
// import { getTimeAgo } from "@/lib/utils/timeAgo";

// const ProductOverview = ({ currentProductDisplay }) => {
//   const latestImageUrl =
//     currentProductDisplay?.reports?.find((r) => r.image_url?.trim())
//       ?.image_url || "/placeholder.jpg";
//   if (!currentProductDisplay) {
//     return <>Loading..</>;
//   }

//   console.log(
//     currentProductDisplay,
//     "Current Product Display in ProductOverview",
//   );

//   return (
//     <div className={styles.productDisplay}>
//       <div className={styles.imageWrapper}>
//         <Image
//           src={latestImageUrl || "/placeholder.jpg"}
//           alt="Product Image"
//           fill
//           sizes="(max-width: 768px) 100vw, 320px"
//           className={styles.stockImage}
//           priority
//         />
//       </div>
//       <div className={styles.productOverview}>
//         <div
//           className={`${styles.productStatus} ${currentProductDisplay.reports?.at(-1)?.product_status?.status_name === "In Stock" ? styles.inStockStatus : currentProductDisplay.reports?.at(-1)?.product_status?.status_name === "Low Stock" ? styles.lowStockStatus : currentProductDisplay.reports?.at(-1)?.product_status?.status_name === "No Reports" ? styles.noReportsStatus : styles.outOfStockStatus}`}
//         >
//           {currentProductDisplay.reports?.at(-1)?.product_status?.status_name
//             ? currentProductDisplay.reports?.at(-1)?.product_status?.status_name
//             : "No Reports"}
//         </div>
//         <div className={styles.productHeader}>
//           {currentProductDisplay.brand} {currentProductDisplay.name}
//         </div>
//         <div className={styles.productDescription}>
//           {currentProductDisplay.description}
//         </div>
//         <div className={styles.productMeta}>
//           <div className={styles.lastReported}>
//             <User size={14} />
//             Last reported by
//             <span className={styles.reportedBy}>
//               {currentProductDisplay.reports?.[0]?.reported_by || "--"}
//             </span>
//           </div>
//           <div className={styles.timeAgo}>
//             <Clock size={14} />
//             {getTimeAgo(
//               currentProductDisplay.reports?.at(-1)?.created_at || "--",
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductOverview;

import React, { useMemo } from "react";
import styles from "./ProductOverview.module.css";
import Image from "next/image";
import { User, Clock } from "lucide-react";
import { getTimeAgo } from "@/lib/utils/timeAgo";

const ProductOverview = ({ currentProductDisplay }) => {
  if (!currentProductDisplay) {
    return <>Loading..</>;
  }

  const reports = currentProductDisplay.reports || [];

  // Latest report by time (NOT array order dependent)
  const latestReport = useMemo(() => {
    if (!reports.length) return null;

    return [...reports].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at),
    )[0];
  }, [reports]);

  // Latest image from ANY report (most recent with image)
  const latestImageUrl =
    [...reports]
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .find((r) => r.image_url?.trim())?.image_url ||
    "/images/placeholder-image.png";

  const statusName = latestReport?.product_status?.status_name || "No Reports";

  const statusClass =
    statusName === "In Stock"
      ? styles.inStockStatus
      : statusName === "Low Stock"
        ? styles.lowStockStatus
        : statusName === "No Reports"
          ? styles.noReportsStatus
          : styles.outOfStockStatus;

  return (
    <div className={styles.productDisplay}>
      <div className={styles.imageWrapper}>
        <Image
          src={latestImageUrl}
          alt="Product Image"
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className={styles.stockImage}
          priority
        />
      </div>

      <div className={styles.productOverview}>
        <div className={`${styles.productStatus} ${statusClass}`}>
          {statusName}
        </div>

        <div className={styles.productHeader}>
          {currentProductDisplay.brand} {currentProductDisplay.name}
        </div>

        <div className={styles.productDescription}>
          {currentProductDisplay.description}
        </div>

        <div className={styles.productMeta}>
          <div className={styles.lastReported}>
            <User size={14} />
            Last reported by
            <span className={styles.reportedBy}>
              {latestReport?.reported_by || "--"}
            </span>
          </div>

          <div className={styles.timeAgo}>
            <Clock size={14} />
            {latestReport?.created_at
              ? getTimeAgo(latestReport.created_at)
              : "--"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
