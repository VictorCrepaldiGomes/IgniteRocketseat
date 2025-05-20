
import styles from './post.module.css';
import { Comments } from '../Comments/Comments';

export function Post() {
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/VictorCrepaldiGomes.png" />
                    <div className={styles.authorInfo}>
                        <strong>Victor Gomes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio as 12:00' dateTime='2025-05-20 12:00:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
               <p>Fala galeraa 👋</p> 
               <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
               <p>
                <a href="#">#newproject</a>{'  '}
                <a href="#">#nlw</a>{' '}
                <a href="#">#rocketseat</a>{' '}
               </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea placeholder='Deixe um comentário'></textarea>

                <footer>
                <button type='submit'>Publicar</button></footer>
            </form>
            <div className={styles.commentList}>
                <Comments />
                <Comments />
                <Comments />
            </div>

           
            
        </article>
    )
}