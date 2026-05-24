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
import styles from "./StockReportWizard.module.css";

const StockReportWizard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
          <DialogTitle>Report Stock Update</DialogTitle>
          <DialogDescription>
            Select a store and product to report a stock update.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default StockReportWizard;