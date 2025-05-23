import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comments.module.css';
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';


export function Comments(props) {

    const [likeCount, setLikeCount] = useState(0)

    function handleNewLike(e) {
        e.preventDefault()
        setLikeCount((state) => {
        return state + 1;

        })

        
    }


    function DeleteComment() {
        
        props.onDeleteComment(props.content)
    }



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

                        <button onClick={DeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>

                </div>

                <footer>
                    <button onClick={handleNewLike}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}