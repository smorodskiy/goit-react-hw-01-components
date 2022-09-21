// Check types of props
import PropTypes from 'prop-types';

// For stylish components
// import styled from 'styled-components';

export default function StatisticsList() {
  return (
    <ul>
      <li>
        <span>.docx</span>
        <span>4%</span>
      </li>
      <li>
        <span>.mp3</span>
        <span>14%</span>
      </li>
      <li>
        <span>.pdf</span>
        <span>41%</span>
      </li>
      <li>
        <span>.mp4</span>
        <span>12%</span>
      </li>
    </ul>
  );
}

StatisticsList.propTypes = {
//   followers: PropTypes.number,
//   views: PropTypes.number,
//   likes: PropTypes.number,
};

