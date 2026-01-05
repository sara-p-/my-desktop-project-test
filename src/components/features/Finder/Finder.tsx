import styles from './Finder.module.css'
import CloseButton from '../../ui/CloseButton/CloseButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import type { DirectoryType } from '../../../types/directoryType'

export default function Finder() {
  // create a const to loop through from numbers 0-5
  const range = Array.from({ length: 6 }, (_, index) => index)

  return (
    <div className={styles.finder}>
      <div className={styles.finderContainer}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <CloseButton name='finder' />
          </div>
          <div className={styles.sidebarContent}>
            <div className={styles.sidebarRow}>
              <h2 className={styles.sidebarRowTitle}>Locations</h2>
              <ul className={styles.sidebarList}>
                <li className={styles.sidebarListItem}>
                  <button className={styles.sidebarItemButton}>
                    <span className={styles.sidebarItemButtonIcon}>
                      <img src={'/folder-icon-small.png'} alt='desktop' />
                    </span>
                    <span className={styles.sidebarItemButtonText}>
                      Desktop
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentHeader}>
            <h1 className={styles.contentHeaderTitle}>Finder</h1>
          </div>
          <div className={styles.content}>
            {range.map((index) => {
              return <FinderColumn key={index} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// FinderColumn component that contains a single column of the finder
export function FinderColumn() {
  const itemRange = Array.from({ length: 10 }, (_, index) => index)

  // Loop through the itemRange and return a FinderItem component for each item
  return (
    <div className={styles.column}>
      <ul className={styles.columnList}>
        {itemRange.map((index) => {
          return <FinderItem key={index} name={`Item ${index}`} type='folder' />
        })}
      </ul>
    </div>
  )
}

// FinderItem component that contains a single item for the FinderColumn
export function FinderItem({
  name,
  type,
}: {
  name: string
  type: DirectoryType
}) {
  return (
    <li className={styles.columnListItem}>
      <button className={styles.itemButton}>
        <span className={styles.itemLabel}>
          <span className={styles.itemIcon}>
            {type === 'folder' ? (
              <img src={'/folder-icon-small.png'} alt='folder' />
            ) : (
              <img src={'/file-icon-small.png'} alt='file' />
            )}
          </span>
          <span className={styles.itemName}>{name}</span>
        </span>
        {type === 'folder' && (
          <span className={styles.itemIcon}>
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </span>
        )}
      </button>
    </li>
  )
}
