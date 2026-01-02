import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href='/'>
          <img src='/vite.svg' alt='Logo' className={styles.logo} />
        </a>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <NewFolderButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export function NewFolderButton() {
  return <button className={styles.newFolderButton}>New Folder</button>
}
