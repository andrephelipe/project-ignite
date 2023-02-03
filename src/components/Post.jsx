/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

// npm i date-fns ==> https://date-fns.org/ => formataçaõ de data
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

// Props Validation
import PropTypes from 'prop-types';

// Components import
import { Avatar } from './Avatar/Avatar';
import { Comments } from './Comments';

// Styles import
import styles from './Post.module.css';

export class Post extends Component {
  render() {
    const { author, content, publishedAt } = this.props;
    const { avatarUrl, name, role } = author;
                                                        // "dd 'de' MMMM 'ás' H:m:ss"
    const publishedDateFormatted = format(publishedAt, 'dd \'de\' MMMM \'ás\' H:m:ss', {
      locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
    });

    return (
      <article className={ styles.post }>
        <header>
          <div className={ styles.author }>
            <Avatar
              src={ avatarUrl }
            />
            <div className={ styles.authorInfo }>
              <strong>{ name }</strong>
              <span>{ role }</span>
            </div>
          </div>

          <time title={ publishedDateFormatted } dateTime={ publishedAt.toISOString() }>
            { publishedDateRelativeToNow }
          </time>
        </header>

        <div className={ styles.content }>
          {
            content.map((line, i) => {
              if (line.type === 'paragraph') {
                return <p key={ i }>{ line.content }</p>;
              }
              if (line.type === 'link') {
                return <a key={ i } href="#">{ line.content }</a>;
              }
              return null;
            })
          }
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
        </div>
      </article>
    );
  }
}

Post.propTypes = {
  author: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['paragraph', 'link']).isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
};
