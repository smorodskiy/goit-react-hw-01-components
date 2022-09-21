// Check types of props
import PropTypes from 'prop-types';

// For stylish components
// import styled from 'styled-components';

export default function Statistics({title}) {
  return (
    <section>
        <h2>{title}</h2>
    </section>
  );
}

Statistics.propTypes = {
//   followers: PropTypes.number,
//   views: PropTypes.number,
//   likes: PropTypes.number,
};

{
    /* <section class="statistics">
    <h2 class="title">Upload stats</h2>
  
    
  </section> */
  }
