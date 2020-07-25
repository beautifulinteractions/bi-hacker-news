import PropTypes from 'prop-types';

import styles from './storybox.module.scss';

/**
 * Story item
 */
const StoryBox = ({ by, id, score, time, title, type, url }) => (
  <article id={id} className={styles.storyBox}>
    <a href={url} target="_blank">
      <h3>{title}</h3>
      <h5>by: {by} | type: {type} | at: {time} | score: {score}</h5>
    </a>
  </article>
);

StoryBox.propTypes = {
  by: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  score: PropTypes.number,
  time: PropTypes.number,
};

export default StoryBox;
