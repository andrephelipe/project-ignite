/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar/Avatar';

export class Sidebar extends Component {
  render() {
    return (
      <aside className={ styles.sidebar }>
        <img
          className={ styles.cover }
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=260&q=80"
          alt="capa do perfil"
        />

        <div className={ styles.profile }>
          <Avatar
            src="https://scontent.fsjk5-1.fna.fbcdn.net/v/t1.18169-9/27752423_1602108446545721_5257978225522747072_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_Ii1n8_6NoYAX-B_zsr&_nc_oc=AQl3Bs0mY7yzVLfqK9T0uEutFVFShYSSnOlI0bn8KrZG3uG3zQQCmJC5MQQIWQfEg8-eKWLnK8vNqYLWu9BdlYpA&tn=qZGTKayJm5D4dxOP&_nc_ht=scontent.fsjk5-1.fna&oh=00_AfDskBm-x_v8TvkxrXIOH0X7pczj2OxhiK0CWrUGUife6A&oe=63F24E03"
          />

          <strong>Andre Phelipe</strong>
          <span>Web developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={ 20 } />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    );
  }
}
