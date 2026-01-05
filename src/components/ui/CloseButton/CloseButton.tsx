import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './CloseButton.module.css'
import type { AppStateType } from '../../../types/appType'
import { useAtom } from 'jotai'
import { appStateAtom } from '../../../atoms/atoms'

export default function CloseButton({ name }: { name: keyof AppStateType }) {
  const [appState, setAppState] = useAtom(appStateAtom)

  function handleClick() {
    setAppState({ ...appState, [name]: false })
  }

  return (
    <button className={styles.closeButton} onClick={handleClick}>
      <FontAwesomeIcon icon={faXmark} />
      <span className='visually-hidden'>Close</span>
    </button>
  )
}
