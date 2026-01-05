import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from './DropDownMenu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

export default function DropDownMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.trigger}>File</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align='start' className={styles.container}>
          <DropdownMenu.Label />
          <DropdownMenu.Item className={styles.item}>
            <span className={styles.itemText}>New Folder</span>
            <span className={styles.itemIcon}>
              <FontAwesomeIcon icon={faFolder} />
            </span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
