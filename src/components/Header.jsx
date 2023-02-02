import React, { Component } from 'react';
import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export class Header extends Component {
  render() {
    return (
      <header className={ styles.header }>
        <img src={ igniteLogo } alt="Logotipo do ignite" />
      </header>
    );
  }
}
