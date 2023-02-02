import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

export class Avatar extends Component {
  render() {
    const { src, hasBorder = 'true' } = this.props;
    // const border = hasBorder !== false;
    return (
      <img
        className={ hasBorder ? styles.avatarWithBorder : styles.avatar }
        src={ src }
        alt=""
      />
    );
  }
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool.isRequired,
};
