// For stylish components
import styled from 'styled-components';

// Friends list
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 8px;
`;

// Avatar
export const Image = styled.img`
  width: 48px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #ebeef3, 0 0 0 22px #f3f4f6;
`;

// Friend
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  background-color: #fff;
  padding: 10px 30px 10px 15px;
  transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
  }
`;

// Status
export const Status = styled.span`
  &:before {
    content: ' ';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 20px;
    border: 1px solid #000;
    border-radius: 50%;
  }

  &:before {
    ${p => {
      switch (p.status) {
        case true:
          return `background-color: #94e185;
                  border-color: #78d965;
                  box-shadow: 0px 0px 4px 1px #94e185;`;
        case false:
          return `background-color: #c9404d;
                  border-color: #c42c3b;
                  box-shadow: 0px 0px 4px 1px #c9404d;`;

        default:
          break;
      }
    }};
  }

`;

// Name
export const Name = styled.p`
  color: #35d8ac;
  font-size: 20px;
  font-weight: 600;
  margin-left: 15px;
`;
