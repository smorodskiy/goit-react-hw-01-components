// Check types of props
import PropTypes from 'prop-types';

// For stylish components
// import styled from 'styled-components';

export default function Statistics({ followers, views, likes }) {
  return (
    <ul>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
