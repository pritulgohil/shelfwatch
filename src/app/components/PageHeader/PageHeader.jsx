"use client";
import React from "react";
import styles from "./PageHeader.module.css";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

const StoreHeader = ({ store }) => {
  const router = useRouter();
  const handleBackNavigation = () => {
    router.back();
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.leftSide}>
          <Button
            onClick={handleBackNavigation}
            variant="ghost"
            className="cursor-pointer shadow-none"
          >
            <ArrowLeft className="size-5" />
          </Button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.storeTitle}>
            <h2>{store.name}</h2>
          </div>
          <div className={styles.storeLocation}>
            <MapPin size={16} />
            {store.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
