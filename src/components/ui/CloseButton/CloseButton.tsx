import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './CloseButton.module.css'

export default function CloseButton() {
  return (
    <button className={styles.closeButton}>
      <FontAwesomeIcon icon={faXmark} />
      <span className='visually-hidden'>Close</span>
    </button>
  )
}
