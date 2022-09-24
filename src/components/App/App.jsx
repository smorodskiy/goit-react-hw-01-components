import Profile from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';

// Profile data
import user from 'data/user.json';
// Stats data
import data from 'data/data.json';
// Users data
import friends from 'data/friends.json';

import { Container } from './App.styled';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <>
      <Container>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={data} />
      </Container>
      <Container>
        <FriendList friends={friends} />
      </Container>
    </>
  );
};
