import React, { Component } from 'react';

// Components import
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

// Styles import
import './global.css';
import styles from './App.module.css';

export class App extends Component {
  render() {
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
