// import React from "react";
// import styles from "./ProductCard.module.css";
// import Image from "next/image";
// import { MapPin, Clock4 } from "lucide-react";
// import { useAppContext } from "@/context/AppContext";
// import { getTimeAgo } from "@/lib/utils/timeAgo";

// const ProductCards = ({ product }) => {
//   const { currentStore, setCurrentProduct, store } = useAppContext();
//   const handleCurrentProduct = (product) => {
//     setCurrentProduct(product.id);
//   };

//   if (!product || !store) {
//     return <>Loading...</>;
//   }

//   return (
//     <div
//       className={`${styles.productCard} cursor-pointer hover:shadow-md transition-shadow duration-200 ease-in-out`}
//       onClick={() => handleCurrentProduct(product)}
//     >
//       <div className={styles.leftSide}>
//         <div className={styles.imageContainer}>
//           <Image
//             src="/images/placeholder.png"
//             alt="Store Image"
//             width={50}
//             height={50}
//             className={styles.stockImage}
//           />
//         </div>
//         <div className={styles.productDetails}>
//           <div className={styles.productMainDetails}>
//             <div className={styles.productHeader}>
//               {product.brand} {product.name}
//             </div>
//             <div className={styles.statusWrapper}>
//               <div
//                 className={`${styles.stockPill} ${product.reports?.[0]?.product_status?.status_name === "In Stock" ? styles.inStock : product.reports?.[0]?.product_status?.status_name === "Low Stock" ? styles.lowStock : product.reports?.[0]?.product_status?.status_name === "Out of Stock" ? styles.outOfStock : styles.noReports}`}
//               >
//                 {product.reports?.[0]?.product_status?.status_name
//                   ? product.reports?.[0]?.product_status?.status_name
//                   : "No Reports"}
//               </div>
//             </div>
//           </div>
//           <div className={styles.brandData}>
//             {product.brand} • {product.description}
//           </div>
//           <div className={styles.productSubDetails}>
//             <div className={styles.category}>{product.categories?.name}</div>
//             <div className={styles.price}>
//               ${" "}
//               {product.reports?.[0]?.price ? product.reports?.[0]?.price : "--"}
//             </div>
//           </div>
//           <div className={styles.productMetadata}>
//             <div className={styles.location}>
//               <MapPin size={14} />
//               {store.name}
//             </div>
//             <div className={styles.time}>
//               <Clock4 size={14} />{" "}
//               {product.reports?.[0]?.created_at
//                 ? getTimeAgo(product.reports[0].created_at)
//                 : "--"}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCards;

import React, { useMemo } from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import { MapPin, Clock4 } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { getTimeAgo } from "@/lib/helpers/timeAgo";

const ProductCards = ({ product }) => {
  const { setCurrentProduct, store } = useAppContext();

  if (!product || !store) {
    return <>Loading...</>;
  }

  // 🔥 Latest report (for status/price/time)
  const latestReport = useMemo(() => {
    const reports = product.reports || [];
    if (!reports.length) return null;

    return [...reports].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at),
    )[0];
  }, [product.reports]);

  // 🔥 Latest image (from ANY report, not just latest one)
  const latestImage = useMemo(() => {
    const reports = product.reports || [];

    return (
      [...reports]
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .find((r) => r.image_url?.trim())?.image_url ||
      "/images/placeholder-image.png"
    );
  }, [product.reports]);

  const status = latestReport?.product_status?.status_name || "No Reports";
  const price = latestReport?.price ?? "--";
  const time = latestReport?.created_at || null;

  const statusClass =
    status === "In Stock"
      ? styles.inStock
      : status === "Low Stock"
        ? styles.lowStock
        : status === "Out of Stock"
          ? styles.outOfStock
          : styles.noReports;

  const handleCurrentProduct = () => {
    setCurrentProduct(product.id);
  };

  return (
    <div
      className={`${styles.productCard} cursor-pointer hover:shadow-md transition-shadow duration-200 ease-in-out`}
      onClick={handleCurrentProduct}
    >
      <div className={styles.leftSide}>
        {/* 🔥 IMAGE FIXED HERE */}
        <div className={styles.imageContainer}>
          <Image
            src={latestImage}
            alt="Product Image"
            width={50}
            height={50}
            className={styles.stockImage}
          />
        </div>

        <div className={styles.productDetails}>
          <div className={styles.productMainDetails}>
            <div className={styles.productHeader}>
              {product.brand} {product.name}
            </div>

            <div className={styles.statusWrapper}>
              <div className={`${styles.stockPill} ${statusClass}`}>
                {status}
              </div>
            </div>
          </div>

          <div className={styles.brandData}>
            {product.brand} • {product.description}
          </div>

          <div className={styles.productSubDetails}>
            <div className={styles.category}>{product.categories?.name}</div>

            <div className={styles.price}>$ {price}</div>
          </div>

          <div className={styles.productMetadata}>
            <div className={styles.location}>
              <MapPin size={14} />
              {store.name}
            </div>

            <div className={styles.time}>
              <Clock4 size={14} />
              {time ? getTimeAgo(time) : "--"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
