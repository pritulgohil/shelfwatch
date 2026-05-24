"use client";

import { useState } from "react";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useStoreContext } from "@/context/StoreContext";
import StoreCards from "@/components/stores/StoreCards/StoreCards";
import styles from "./StockReportWizard.module.css";

const StockReportWizard = () => {
  const { stores } = useStoreContext();
  const [open, setOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setSelectedStore(null);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!val) handleClose(); else setOpen(true); }}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`${styles.triggerButton} w-full p-6 cursor-pointer shadow-none`}
          size="sm"
        >
          <CirclePlus size={16} />
          Report Stock Update
        </Button>
      </DialogTrigger>

      <DialogContent className={styles.dialogContent}>
        <DialogHeader>
          <DialogTitle>Select a store</DialogTitle>
          <DialogDescription>Where are you reporting from?</DialogDescription>
        </DialogHeader>

        <div className={styles.storeList}>
          {stores?.map((store) => (
            <StoreCards
              key={store.id}
              store={store}
              onSelect={setSelectedStore}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StockReportWizard;