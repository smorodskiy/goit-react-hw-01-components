import Profile from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

// Profile data
import user from 'data/user.json';
// Stats data
import data from 'data/data.json';
// Users data
import friends from 'data/friends.json';
// Transactions data
import transactions from "data/transactions.json";

import { MainContainer, LeftContainer } from './App.styled';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <MainContainer>
      <LeftContainer>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />

        <Statistics title="Upload stats" stats={data} />
      </LeftContainer>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </MainContainer>
  );
};
