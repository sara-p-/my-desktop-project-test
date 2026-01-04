import styles from './Finder.module.css'
import CloseButton from '../../ui/CloseButton/CloseButton'

export default function Finder() {
  return (
    <div className={styles.finder}>
      <div className={styles.finderContainer}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <CloseButton />
          </div>
          <div className={styles.sidebarContent}>
            <ul className={styles.sidebarList}>
              <li className={styles.sidebarListItem}>
                <p>Desktop</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.header}>
            <h1>Finder</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.column}>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <p>Desktop</p>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <p>Desktop</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
