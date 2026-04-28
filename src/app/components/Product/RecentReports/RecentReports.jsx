import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import styles from "./RecentReports.module.css";
import { Image } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { getTimeAgo } from "@/lib/utils/timeAgo";

function RecentReports() {
  const { currentProductDisplay } = useAppContext();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionHeader}>Recent Reports</div>
      {currentProductDisplay?.reports?.length > 0 ? (
        <div className={styles.accordionContainer}>
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-lg border"
          >
            {currentProductDisplay?.reports?.map((report, index) => {
              const hasImage = !!report.image_url;

              const reportHeader = (
                <div className={styles.accordionTrigger}>
                  <div className={styles.leftSide}>
                    <div className={styles.topContainer}>
                      <div
                        className={`${styles.stockPill} ${
                          report.product_status?.status_name === "In Stock"
                            ? styles.inStockStatus
                            : report.product_status?.status_name === "Low Stock"
                              ? styles.lowStockStatus
                              : report.product_status?.status_name ===
                                  "No Reports"
                                ? styles.noReportsStatus
                                : styles.outOfStockStatus
                        }`}
                      >
                        {report.product_status?.status_name || "Unknown"}
                      </div>

                      <div className={styles.price}>
                        ${report.price ?? "--"}
                      </div>
                    </div>

                    <div className={styles.midContainer}>
                      Reported by{" "}
                      <span className={styles.userName}>
                        {report.reported_by}
                      </span>
                    </div>

                    <div className={styles.bottomContainer}>
                      {report.created_at ? getTimeAgo(report.created_at) : ""}
                    </div>
                  </div>

                  <div className={styles.rightSide}>
                    {hasImage && (
                      <div className={styles.photoIndicator}>
                        <Image size={14} />
                        View Photo
                      </div>
                    )}
                  </div>
                </div>
              );

              return (
                <AccordionItem
                  key={report.id || index}
                  value={String(index)}
                  className="px-4"
                >
                  {hasImage ? (
                    <AccordionTrigger className="py-4 hover:no-underline">
                      {reportHeader}
                    </AccordionTrigger>
                  ) : (
                    <div className="py-4">{reportHeader}</div>
                  )}

                  {hasImage && (
                    <AccordionContent className="pb-4 overflow-hidden">
                      <img
                        src={report.image_url}
                        alt="Report"
                        className="w-48 h-48 object-cover rounded-lg"
                      />
                    </AccordionContent>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      ) : (
        <div className={styles.noReports}>
          <Separator className="my-4" />
          No reports available.
        </div>
      )}
    </div>
  );
}

export default RecentReports;
