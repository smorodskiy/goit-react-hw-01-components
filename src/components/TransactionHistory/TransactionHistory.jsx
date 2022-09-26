// Check types of props
import PropTypes from 'prop-types';
import {
  TransactionSection,
  Table,
  ColumnData,
  TableHead,
  BodyRow,
  HeadType,
  BodyType,
} from './TransactionHistory.styled';

import { cellIn, cellOut } from './HoverEffect';

function Transaction(data) {
  const { type, amount, currency } = data;
  return (
    <BodyRow>
      <ColumnData as={BodyType} className="column1" data-column="1">
        {type}
      </ColumnData>
      <ColumnData className="column2" data-column="2">
        {amount}
      </ColumnData>
      <ColumnData className="column3" data-column="3">
        {currency}
      </ColumnData>
    </BodyRow>
  );
}

export default function TransactionHistory({ items: history }) {
  return (
    <TransactionSection>
      <Table onMouseOver={cellIn} onMouseOut={cellOut}>
        <thead>
          <tr>
            <TableHead as={HeadType} className="column1">Type</TableHead>
            <TableHead className="column2">Amount</TableHead>
            <TableHead className="column3">Currency</TableHead>
          </tr>
        </thead>

        <tbody>
          {history.map(transaction => {
            const { id, type, amount, currency } = transaction;

            return (
              <Transaction
                key={id}
                type={type}
                amount={amount}
                currency={currency}
              />
            );
          })}
        </tbody>
      </Table>
    </TransactionSection>
  );
}

// Types
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
