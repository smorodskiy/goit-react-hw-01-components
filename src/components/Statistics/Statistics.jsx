// Check types of props
import PropTypes from 'prop-types';

import {
  StatisticsSection,
  StatisticsList,
  ListWrapper,
  Item,
  Label,
  Percent,
  Title,
} from './Statistics.styled';

// Statistics list
function StatisticsItem({ label, percentage, index }) {  
  return (
    <Item color={index}>
      <Label>{label}</Label>
      <Percent>{percentage}</Percent>
    </Item>
  );
}

// Statistics
export function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      <StatisticsList>
        {title && <Title>{title}</Title>}
        <ListWrapper>
          {stats.map(({ id, label, percentage }, i) =>             
            <StatisticsItem
              key={id}
              label={label}
              percentage={percentage}
              index={i}
            />
          )}
        </ListWrapper>
      </StatisticsList>
    </StatisticsSection>
  );
}

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
