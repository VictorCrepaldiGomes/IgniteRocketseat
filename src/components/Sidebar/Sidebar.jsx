import styles from './Sidebar.module.css';
import Images from '../../assets/images/ImgPerson.jpg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar.jsx'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={Images} />
            <div className={styles.profile}>
               <Avatar src="https://github.com/VictorCrepaldiGomes.png" />
                <strong>Victor Gomes</strong>
                <span>Web Developer</span>
            </div>


            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
