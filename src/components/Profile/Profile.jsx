// Check types of props
import PropTypes from 'prop-types';

// For stylish components
// import styled from 'styled-components';

import Description from './Description';
import Statistics from './Statistics';

// Profile
export default function Profile(user) {
  const { stats } = user;
  return (
    <>
      <Description {...user} />
      <Statistics {...stats} />
    </>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({}),
  stats: PropTypes.shape({}),
};

//   import user from 'path/to/user.json;
