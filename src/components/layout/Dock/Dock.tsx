import styles from './Dock.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import type { AppStateType } from '../../../types/appType'
import { useAtom } from 'jotai'
import { appStateAtom } from '../../../atoms/atoms'

// Dock component that contains all of the dock items
export default function Dock() {
  return (
    <div className={styles.dock}>
      <div className={styles.container}>
        <DockItem name='finder' icon={faHouse as IconDefinition} />
      </div>
    </div>
  )
}

// DockItem component that contains a single dock item
export function DockItem({
  name,
  icon,
}: {
  name: keyof AppStateType
  icon: IconDefinition
}) {
  // Grab the app states and the app state setter from Jotai
  const [appState, setAppState] = useAtom(appStateAtom)

  // On click, toggle the app state for the given app
  function handleClick(name: keyof AppStateType) {
    setAppState({ ...appState, [name]: !appState[name] })
  }

  return (
    <button className={styles.dockItem} onClick={() => handleClick(name)}>
      <FontAwesomeIcon icon={icon} />
      <span className={styles.dockItemName}>{name}</span>
    </button>
  )
}
