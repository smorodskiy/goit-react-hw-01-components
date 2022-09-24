// For stylish components
import styled from 'styled-components';

// Section
export const StatisticsSection = styled.section`
  width: 320px;
  box-shadow: 0 0 88px 0 rgb(0 0 0 / 16%);
`;

// List wrapper
export const ListWrapper = styled.div`
  display: flex;
  min-height: 80px;
  color: ${(p) => p.theme.statistics.listTextColor};
`;

// List
export const StatisticsList = styled.ul``;

// Item
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 4);

  background-color: ${p => {
    switch (p.color) {
      case 0:
        return p.theme.statistics.listColors[p.color];
      case 1:
        return p.theme.statistics.listColors[p.color];
      case 2:
        return p.theme.statistics.listColors[p.color];
      case 3:
        return p.theme.statistics.listColors[p.color];
      default:
        return '#fff';
    }
  }};
`;

// Title
export const Title = styled.h2`
  padding: 30px;
  text-align: center;
  background-color: ${p => p.theme.statistics.titleBgColor};
  text-transform: uppercase;
  font-weight: 600;
  color: ${p => p.theme.statistics.titleTextColor};
`;


// Label
export const Label = styled.span`
  margin-bottom: 5px;
`;

// Percent
export const Percent = styled.span`
  font-size: 25px;
`;
