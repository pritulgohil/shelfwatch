import React from "react";
import styles from "./ActivityReportCard.module.css";
import { Users, Camera } from "lucide-react";

const ActivityReportCard = ({ currentProductDisplay }) => {
  const photosAttached =
    currentProductDisplay?.reports?.filter((r) => r.image_url)?.length || 0;
  return (
    <div className={styles.activityReportContainer}>
      <div className={styles.activityReportHeader}>Activity</div>
      <div className={styles.activityDetailsContainer}>
        <div className={styles.activityRow}>
          <div className={styles.activityName}>
            <Users size={16} />
            Total Reports
          </div>
          <div className={styles.activityNumber}>
            {currentProductDisplay?.reports.length || 0}
          </div>
        </div>
        <div className={styles.activityRow}>
          <div className={styles.activityName}>
            <Camera size={16} />
            Photos Attached
          </div>
          <div className={styles.activityNumber}>{photosAttached}</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityReportCard;
