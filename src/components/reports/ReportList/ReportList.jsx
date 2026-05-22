"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./ReportList.module.css";
import ReportCards from "@/components/reports/ReportCard/ReportCard";
import { useAppContext } from "@/context/AppContext";
import { PackageX, LoaderCircle } from "lucide-react";

const ReportRender = () => {
  const { } = useAppContext();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);

      try {
        const res = await fetch("api/reports/fetch-reports");

        if (!res.ok) throw new Error("Failed to fetch reports");

        const data = await res.json();
        setReports(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setReports([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        {loading ? (
          <div className={styles.centerMessage}>
            <LoaderCircle className="animate-spin" />
            <p>Loading products...</p>
          </div>
        ) : reports.length === 0 ? (
          <div className={styles.centerMessage}>
            <PackageX />
            <p>No products found for this category.</p>
          </div>
        ) : (
          <div className={styles.productCardsContainer}>
            {reports.map((report) => (
              <Link
                key={report.id}
                href={`/${report.stores.city}/${report.stores.store_slug}/${report.products.slug}`}
                style={{ display: "contents" }}
              >
                <ReportCards report={report} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportRender;
