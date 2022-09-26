// For stylish components
import styled from 'styled-components';

// CSS in JS
export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;  
  grid-template-areas: 
    "profile friends"
    "stats ."
    "transaction transaction";
  gap: 15px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  gap: 15px;
`;
