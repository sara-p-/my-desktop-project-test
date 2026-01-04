import styles from './Dock.module.css'
import type { AppStateType } from '../../../types/appType'
import { useAtom } from 'jotai'
import { appStateAtom } from '../../../atoms/atoms'

// Dock component that contains all of the dock items
export default function Dock() {
  return (
    <div className={styles.dock}>
      <div className={styles.container}>
        <DockItem name='finder' img={'/finder-icon.png'} />
      </div>
    </div>
  )
}

// DockItem component that contains a single dock item
export function DockItem({
  name,
  img,
}: {
  name: keyof AppStateType
  img: string
}) {
  // Grab the app states and the app state setter from Jotai
  const [appState, setAppState] = useAtom(appStateAtom)

  // On click, toggle the app state for the given app
  function handleClick(name: keyof AppStateType) {
    setAppState({ ...appState, [name]: !appState[name] })
  }

  return (
    <button className={styles.dockItem} onClick={() => handleClick(name)}>
      <img src={img} alt={name} className={styles.dockItemImg} />
      <span className={styles.dockItemName}>{name}</span>
    </button>
  )
}
