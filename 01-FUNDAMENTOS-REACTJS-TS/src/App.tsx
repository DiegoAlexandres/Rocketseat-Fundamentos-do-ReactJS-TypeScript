import { Post, PostType } from './components/Post.jsx';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diegoalexandres.png',
      name: 'Diego Alexandre',
      role: 'Desenvolvedor Full Stack',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ], 
    publishedAt: new Date('2024-02-10 11:43:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'João Santana',
      role: 'Desenvolvedor Front-End',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: ' Desenvolvedor Front-End. Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ], 
    publishedAt: new Date('2024-01-31 13:30:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post =>{
           return (
            <Post
                key={post.id}
                post={post}
            />
            )
          })}
        </main>
      </div>

    </div>
  )
}
