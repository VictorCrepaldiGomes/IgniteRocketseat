import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comments.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Comments() {
    return (
        <div className={styles.commentsTitle}>
            <Avatar hasBorder={false} src="https://github.com/VictorCrepaldiGomes.png" />

            <div className={styles.commentsBox}>
                <div className={styles.commentsContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victor Gomes</strong>
                            <time title='11 de Maio as 12:00' dateTime='2025-05-20 12:00:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}