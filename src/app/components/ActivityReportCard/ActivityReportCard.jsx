import React from "react";
import styles from "./ActivityReportCard.module.css";

const ActivityReportCard = () => {
  return (
    <div className={styles.activityReportContainer}>
      <div className={styles.activityReportHeader}>Activity</div>
      <div className={styles.activityDetailsContainer}>
        <div className={styles.activityRow}>
          <div className={styles.activityName}>Total Reports</div>
          <div className={styles.activityNumber}>12</div>
        </div>
        <div className={styles.activityRow}>
          <div className={styles.activityName}>Photos Attached</div>
          <div className={styles.activityNumber}>8</div>
        </div>
        <div className={styles.activityRow}>
          <div className={styles.activityName}>Price Votes</div>
          <div className={styles.activityNumber}>36</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityReportCard;
