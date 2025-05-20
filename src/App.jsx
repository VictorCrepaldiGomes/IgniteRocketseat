import { Post } from './components/post/post'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import styled from './App.module.css'

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
      <Post 
        author="John" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." 
        likes={10}
      />
      <Post 
        author="Johndsadasd" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." 
        likes={1330}
      />


      </main>

    </div>
      
    </>
  )
}

