import styles from'./Header.module.css'

import logoHeader from '../../assets/images/logoHeader.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src ={logoHeader} alt='logo' />
            {/* <strong>Ignite Feed</strong> */}
        </header>
    )
}