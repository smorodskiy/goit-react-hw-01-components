// For stylish components
import styled from 'styled-components';

// Card
export const Card = styled.div`
  position: relative;
  width: 320px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.1607843137254902);
`;

// Username
export const Username = styled.p`
  font-weight: 700;  
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
  background: #fff;
  font-size: 18px;
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
  background-color: #f3f6f9;
  height: 100px;
  border-top: 1px solid #dbdbdb;
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
    border-right: 1px solid #dbdbdb;
  }

  & > span:last-child {
    margin-top: 5px;
    font-weight: 700;
  }
  /* ::before {
    content: '';
    border: 1px solid red;
  } */
`;
