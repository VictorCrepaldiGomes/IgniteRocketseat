import styles from './post.module.css';
import { Comments } from '../Comments/Comments';
import { Avatar } from '../Avatar/Avatar.jsx';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState } from 'react';

const PostJson = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/VictorCrepaldiGomes.png',
            name: 'Victor Gomes',
            role: 'Web Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' }
  
        ],
  
        publishedAt: new Date('2025-05-20 12:00:00'),
  
    },
  
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/VictorCrepaldiGomes.png',
            name: 'Fernando',
            role: 'Back-End Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' }
  
        ],
  
        publishedAt: new Date('2025-05-20 12:00:00'),
  
    }
  ]



  export default PostJson;


export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([0])


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(e) {
        e.preventDefault()
        setComments([...comments, comments.lenght + 1])
        // setComments([...comments, comments.length + 1])
        

    }

    
    
     

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === 'paragraph') {
                        return <p>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p><a href='#'>{item.content}</a></p>
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea placeholder='Deixe um comentário'></textarea>

                <footer>
                    <button type='submit'>Publicar</button></footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comments />
                })}
            </div>



        </article>
    )
}