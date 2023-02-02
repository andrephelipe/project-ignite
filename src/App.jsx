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
          avatar_url: "www.foto",
          name: 'Miguel'
        },
      },
    ]

    return (
      <div>
        <Header />

        <div className={ styles.wrapper }>
          <Sidebar />
          <main>
            <Post />
            <Post />
            <Post />
            <Post />
          </main>
        </div>
      </div>
    );
  }
}
