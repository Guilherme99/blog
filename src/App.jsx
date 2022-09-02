import { Header } from "./components/Header"
import { Post } from "./components/Post"

import './global.css'
import styles from './app.module.css'
import { Sidebar } from "./components/Sidebar"

const Posts = [
  {
    author:"Italo", 
    content:"Loren Sputas" 
  },
  {
    author:"Joana", 
    content:"Loren Sputas" 
  },
  {
    author:"Belissa" ,
    content:"Loren Sputas" 
  },
]
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            Posts?.map((post) => (
              <Post 
                author={post?.author}
                content={post?.content}
              />

            ))
          }
        </main>
      </div>
      
    </>
  )
}
