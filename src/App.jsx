import { Post } from './components/post/post'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import styled from './App.module.css'
import PostJson from './components/post/post'

import './components/Global/style.css'



export function App() {

  return (
    <>
      <Header />

      <div className={styled.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {PostJson.map(post => {
            return (
              <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}

        </main>

      </div>

    </>
  )
}

