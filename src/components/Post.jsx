/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Avatar } from './Avatar/Avatar';
import { Comments } from './Comments';
import styles from './Post.module.css';

export class Post extends Component {
  render() {
    return (
      <article className={ styles.post }>
        <header>
          <div className={ styles.author }>
            <Avatar
              src="https://github.com/diego3g.png"
            />
            <div className={ styles.authorInfo }>
              <strong>Diego Fernandes</strong>
              <span>Web developer</span>
            </div>
          </div>

          <time title="20 de janeiro 18:24" dateTime="2023-01-20 18:23:00">
            Publicado há 1h
          </time>
        </header>

        <div className={ styles.content }>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉
            {' '}
            <a>jane.design/doctorcare</a>
            <p>#novoprojeto #nlw #nlwreturn #doctorcare #rocketseat</p>
          </p>
        </div>

        <form className={ styles.commentForm }>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder="Deixe um comentario" />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={ styles.commentList }>
          <Comments />
          <Comments />
          <Comments />
        </div>
      </article>
    );
  }
}
