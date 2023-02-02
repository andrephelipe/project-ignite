import React, { Component } from 'react';

// Components import
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

// Styles import
import './global.css';
import styles from './App.module.css';

export class App extends Component {
  /*
    Pots
    author: {avatar_url: '', name: '', role: ''}
    published: Date
    content: string
  */

  render() {
    const posts = [
      {
        id: 1,
        author: {
          avatarUrl: 'https://github.com/webstar0103.png',
          name: 'Miguel Vasconcelos',
          role: 'Escriturario',
        },
        content: [
          {
            type: 'paragraph',
            content: 'Fala galeraa 👋',
          },
          {
            type: 'paragraph',
            content: 'Acabei de subir mais um projeto no meu portifa.',
          },
          {
            type: 'paragraph',
            content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.',
          },
          {
            type: 'paragraph',
            content: 'O nome do projeto é DoctorCare 🚀',
          },
          {
            type: 'paragraph',
            content: '👉',
          },
          {
            type: 'link',
            content: 'jane.design/doctorcare',
          },
          {
            type: 'paragraph',
            content: '#novoprojeto #nlw #nlwreturn #doctorcare #rocketseat',
          },
        ],
        publishedAt: new Date('2023-02-02 16:52:00'),
      },
      {
        id: 2,
        author: {
          avatarUrl: 'https://github.com/caioagiani.png',
          name: 'Caio Fernandez',
          role: 'Corretor de imoveis',
        },
        content: [
          {
            type: 'paragraph',
            content: 'Fala galeraa 👋',
          },
          {
            type: 'paragraph',
            content: 'Acabei de subir mais um projeto no meu portifa.',
          },
          {
            type: 'paragraph',
            content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.',
          },
          {
            type: 'paragraph',
            content: 'O nome do projeto é DoctorCare 🚀',
          },
          {
            type: 'paragraph',
            content: '👉',
          },
          {
            type: 'link',
            content: 'jane.design/doctorcare',
          },
          {
            type: 'paragraph',
            content: '#novoprojeto #nlw #nlwreturn #doctorcare #rocketseat',
          },
        ],
        publishedAt: new Date('2023-02-10 16:52:00'),
      },
    ];

    return (
      <div>
        <Header />

        <div className={ styles.wrapper }>
          <Sidebar />
          <main>
            {
              posts.map((post) => (
                <Post
                  key={ post.id }
                  author={ post.author }
                  content={ post.content }
                  publishedAt={ post.publishedAt }
                />
              ))
            }
          </main>
        </div>
      </div>
    );
  }
}
