// Check types of props
import PropTypes from 'prop-types';

// For stylish components
import styled from 'styled-components';

// Statistics list
const StatisticsList = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

// Statistics
export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsList key={id} label={label} percentage={percentage} />
      ))}
    </section>
  );
};

// Types
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
