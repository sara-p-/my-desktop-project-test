import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Header.module.css'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import DropDownMenu from '../../ui/DropDownMenu/DropDownMenu'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.logoButton}>
          <FontAwesomeIcon icon={faComputer} />
        </button>
        <div className={styles.menuButtons}>
          <DropDownMenu />
        </div>
      </div>
    </header>
  )
}

export function NewFolderButton() {
  return <button className={styles.newFolderButton}>New Folder</button>
}
