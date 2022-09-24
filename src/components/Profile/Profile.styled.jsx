// For stylish components
import styled from 'styled-components';

// Card
export const Card = styled.div`
  position: relative;
  width: 320px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${p => p.theme.profile.cardShadow};
`;

// Username
export const Username = styled.p`
  font-size: ${p => p.theme.profile.fontSize};
  font-weight: ${p => p.theme.profile.fontWeight};
`;

// Tag
export const Tag = styled.p``;

// Location
export const Location = styled.p`
  margin-bottom: 50px;
`;

// Description wrapper
export const DescriptionDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${p => p.theme.profile.descriptionBgColor};
  font-size: ${p => p.theme.profile.descriptionFontSize};
  /* HARDCORE!!!! */
  & p:not(:last-child) {
    margin-bottom: 10px;
  }
`;

// Image
export const Image = styled.img`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 150px;
  margin: 50px auto 50px auto;
  border-radius: 50%;
`;

// Statistics list
export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.profile.statsBgColor};
  height: 100px;
  border-top: 1px solid ${p => p.theme.profile.borderColor};
  box-sizing: border-box;
`;

// Statistics item
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  text-align: center;
  height: 100%;
  justify-content: center;

  &:not(:last-child) {
    border-right: 1px solid${p => p.theme.profile.borderColor};
  }

  & > span:last-child {
    margin-top: 5px;
    font-weight: 700;
  }

`;
