import styles from './Dock.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import useOpenFinderContext from '../../../hooks/useOpenFinderContext'

export default function Dock() {
  return (
    <div className={styles.dock}>
      <div className={styles.container}>
        <DockItem name='Finder' icon={faHouse as IconDefinition} />
      </div>
    </div>
  )
}

export function DockItem({
  name,
  icon,
}: {
  name: string
  icon: IconDefinition
}) {
  const { setOpenFinder } = useOpenFinderContext()
  function handleClick(name: string) {
    if (name === 'Finder') {
      setOpenFinder(true)
    }
  }

  return (
    <button className={styles.dockItem} onClick={() => handleClick(name)}>
      <FontAwesomeIcon icon={icon} />
      {name}
    </button>
  )
}
