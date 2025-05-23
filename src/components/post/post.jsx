import styles from './post.module.css';
import { Comments } from '../Comments/Comments.jsx';
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

    const [comments, setComments] = useState([])

    const [newComment, setNewComment] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(e) {

        e.preventDefault()
        setComments([...comments, newComment])
        setNewComment('')
        

    }

    function handleNewCommentChange(e ) {
        e.target.setCustomValidity('')
        setNewComment(e.target.value)
        
    }

    function handleDeleteComment(commentToDelete) {
        const UserConfirmed = confirm('Deseja apagar o comentário ?')
        const commentsWithoutDeletedOne = comments.filter(comment => {
            if(UserConfirmed) {
                return comment !== commentToDelete;
            } else {
                commentsWithoutDeletedOne
            }
        })

        // console.log(`O comentário que irá ser apagado é o seguinte ${commentToDelete}`);
        
        setComments(commentsWithoutDeletedOne)
        
    }

    // function handleNewCommentInvalid(e) {
    //   console.log(e.target.setCustomValidity('Campo obrigatório'));
        
    // }

    const isNewCommentEmpty = newComment.length === 0;
    
    
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
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p key={item.content}><a href='#'>{item.content}</a></p>
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea 
                name='comment'
                value={newComment}
                placeholder='Deixe um comentário'
                onChange={handleNewCommentChange}
                required
                >
                </textarea>

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button></footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comments key={comment} content={comment} onDeleteComment={handleDeleteComment} />
                })}


            </div>



        </article>
    )
}