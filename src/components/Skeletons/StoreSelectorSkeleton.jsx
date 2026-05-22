"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const StoreSelectorSkeleton = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between border border-gray-200 p-4 rounded-xl">
        <div className="flex items-center gap-4">
          <Skeleton className="w-12 h-12 rounded-lg" />

          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-[140px]" />
            <Skeleton className="h-3 w-[180px]" />
            <Skeleton className="h-3 w-[120px]" />
          </div>
        </div>

        <Skeleton className="h-4 w-4 rounded-sm" />
      </div>
    </div>
  );
};

export default StoreSelectorSkeleton;
