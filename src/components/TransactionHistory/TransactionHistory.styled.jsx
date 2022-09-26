// For stylish components
import styled from 'styled-components';

// Transaction section
export const TransactionSection = styled.section`
  grid-area: transaction;
`;

// Table
export const Table = styled.table`
  width: 100%;
  /* overflow: scroll; */
  /* height: 200px; */
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

// Head
export const TableHead = styled.th`
  padding: 24px 10px 20px 25px;
  text-align: left;
  font-size: 12px;
  color: #fff;
  line-height: 1.4;
  text-transform: uppercase;
  background-color: #6c7ae0;

  &:hover {
    background-color: #7b88e3 !important;
  }

  &.hover-column {
    background-color: #7b88e3 !important;
  }
`;

// Column data
export const ColumnData = styled.td`
  padding: 18px 10px 14px 25px;
  font-size: 14px;
  color: gray;
  line-height: 1.4;

  &:hover {
    background-color: #e03e9c !important;
    color: #fff;
  }

  &.hover-column {
    background-color: #fcebf5;
  }
`;

// Style for type column(head)
export const HeadType = styled(TableHead)`
  padding-left: 64px;
`;


// Body row
export const BodyRow = styled.tr`
  border-bottom: 1px solid #e5e5e5;

  &:hover td {
    background-color: #fcebf5;
  }
`;

// Style for type column(body)
export const BodyType = styled(ColumnData)`
  padding-left: 64px;
`;
