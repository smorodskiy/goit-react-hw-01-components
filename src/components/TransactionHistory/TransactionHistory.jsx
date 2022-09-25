// Check types of props
// import PropTypes from 'prop-types';
// import { List, Image, Item, Status, Name } from './FriendList.styled';

<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>;

export default function TransactionHistory({ transactions }) {
  return <></>;
}

// Types
// TransactionHistory.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool,
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };
