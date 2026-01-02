import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Folder.module.css'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

export default function Folder() {
  return (
    <div className={styles.folder}>
      <div className={styles.container}>
        <FontAwesomeIcon icon={faFolder} />
        <span className={styles.folderName}>New Folder</span>
      </div>
    </div>
  )
}
