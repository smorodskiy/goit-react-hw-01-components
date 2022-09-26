// For stylish components
import styled from 'styled-components';

// Transaction section
export const TransactionSection = styled.section`
  grid-area: transaction;
`;

// Table
export const Table = styled.table`
  overflow: auto;
  border-collapse: collapse;
  display: block;
  max-height: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  /* Hardcore !!! */
  & tbody td,
  & thead th {
    width: 1%;
  }
`;

// Head of table
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

// Table data
export const TableData = styled.td`
  padding: 18px 10px 14px 25px;
  font-size: 14px;
  color: gray;
  line-height: 1.4;

  /* On hover */
  &:hover {
    background-color: #e03e9c !important;
    color: #fff;
  }

  /* Fill with color another cell in the column */
  &.hover-column {
    background-color: #fcebf5;
  }
`;

// Style for type column(head)
export const HeadType = styled(TableHead)`
  padding-left: 64px;

  @media (max-width: 660px) {
    padding-left: 35px;
  }
`;

// Body row
export const BodyRow = styled.tr`
  border-bottom: 1px solid #e5e5e5;

  &:hover td {
    background-color: #fcebf5;
  }
`;

// Style for type column(body)
export const BodyType = styled(TableData)`
  padding-left: 64px;

  @media (max-width: 660px) {
    padding-left: 35px;
  }
`;
