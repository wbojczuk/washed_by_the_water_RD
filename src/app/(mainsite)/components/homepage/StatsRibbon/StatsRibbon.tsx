import styles from "./statsribbon.module.css"

export default function StatsRibbon() {
  return (
    <div className={styles.statsRibbon}>
        <div className={styles.statWrapper}>
            <h3 className={styles.stat}>20+</h3>
            <h4 className={styles.title}>Years Experience</h4>
        </div>
        <div className={styles.statWrapper}>
            <h3 className={styles.stat}>100%</h3>
            <h4 className={styles.title}>Satisfaction</h4>
        </div>
        <div className={styles.statWrapper}>
            <h3 className={styles.stat}>80+</h3>
            <h4 className={styles.title}>Happy Clients</h4>
        </div>
    </div>
  )
}
