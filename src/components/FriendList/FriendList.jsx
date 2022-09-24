// Check types of props
import PropTypes from 'prop-types';
import { List, Image, Item, Status, Name } from './FriendList.styled';

function FriendListItem(info) {
  const { avatar, name, isOnline } = info;
  return (
    <Item>
      <Status status={isOnline}></Status>
      <Image src={avatar} alt={name + ' avatar'} />
      <Name>{name}</Name>
    </Item>
  );
}

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => {
        const { avatar, name, isOnline = false, id } = friend;
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendListItem>
        );
      })}
    </List>
  );
}

// Types
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired,
      })
  ),
};
