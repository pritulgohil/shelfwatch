"use client";
import React, { useEffect, useState } from "react";
import styles from "./PageHeader.module.css";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

const StoreHeader = () => {
  const { currentStore, store, setStore } = useAppContext();
  useEffect(() => {
    const fetchStoreById = async () => {
      try {
        const res = await fetch(`/api/stores/fetch-stores/${currentStore}`);
        const data = await res.json();
        setStore(data);
      } catch (err) {
        console.error("Error fetching store:", err);
      }
    };

    if (currentStore) fetchStoreById();
  }, [currentStore]);
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
          {store && (
            <div className={styles.storeTitle}>
              <h2>{store.name}</h2>
            </div>
          )}
          {store && (
            <div className={styles.storeLocation}>
              <MapPin size={16} />
              {store.address}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
