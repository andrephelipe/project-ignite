/* eslint-disable react/jsx-max-depth */
import { ThumbsUp, Trash } from 'phosphor-react';
import React, { Component } from 'react';
import { Avatar } from './Avatar/Avatar';
import styles from './Comments.module.css';

export class Comments extends Component {
  render() {
    return (
      <div className={ styles.comment }>
        <Avatar
          src="https://miro.medium.com/max/1400/1*M1X1HHqmeFcM2XY0wij9Iw.jpeg"
          alt=""
          hasBorder={ false }
        />

        <div className={ styles.commentBox }>
          <div className={ styles.commentContent }>
            <header>
              <div className={ styles.authorAndTime }>
                <strong>Maria Clara</strong>
                <time title="20 de janeiro 18:24" dateTime="2023-01-20 18:23:00">
                  Cerca de 1hr atrás
                </time>
              </div>

              <button
                title="Deletar comentário"
              >
                <Trash size={ 24 } />
              </button>
            </header>

            <p>Muito bom, parabens</p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir
              {' '}
              <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
