// For stylish components
import styled from 'styled-components';

// Friends list
export const List = styled.ul``;

// Avatar
export const Image = styled.img`
  width: 48px;
`;

// Friend
export const Item = styled.li`
  display: flex;
  align-items: center;
`;

// Status
export const Status = styled.span`

&:before {
    content: ' ';
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-right: 10px;
    border: 1px solid #000;
    border-radius: 7px;
  }

  &:before {
    background-color: ${p => {
      switch (p.status) {
        case true:
          return 'green';
        case false:
          return 'red';

        default:
          break;
      }
    }};
  }

  &.online:before {
    background-color: #94e185;
    border-color: #78d965;
    box-shadow: 0px 0px 4px 1px #94e185;
  }

  &.busy:before {
    background-color: #ffc182;
    border-color: #ffb161;
    box-shadow: 0px 0px 4px 1px #ffc182;
  }

  &.offline:before {
    background-color: #c9404d;
    border-color: #c42c3b;
    box-shadow: 0px 0px 4px 1px #c9404d;
  }
`;

// Name
export const Name = styled.p``;
