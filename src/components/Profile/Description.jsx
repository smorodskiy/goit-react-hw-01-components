// Check types of props
import PropTypes from 'prop-types';

// For stylish components
// import styled from 'styled-components';

export default function Description({
  username,
  tag,
  location,
  avatar: src = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
}) {
  return (
    <div>
      <img src={src} alt={tag} />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  );
}

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
