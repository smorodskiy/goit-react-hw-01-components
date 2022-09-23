// Check types of props
import PropTypes from 'prop-types';

import {
  StatisticsList,
  StatisticsItem,
  DescriptionDiv,
  Image,
  Card,
  Username,
  Tag,
  Location,
} from './Profile.styled';

// Statistics ====================================
function Statistics({ followers = 0, views = 0, likes = 0 }) {
  return (
    <StatisticsList>
      <StatisticsItem>
        <span>Followers</span>
        <span>{followers}</span>
      </StatisticsItem>
      <StatisticsItem>
        <span>Views</span>
        <span>{views}</span>
      </StatisticsItem>
      <StatisticsItem>
        <span>Likes</span>
        <span>{likes}</span>
      </StatisticsItem>
    </StatisticsList>
  );
}

// Description ====================================
function Description({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',  
}) {
  const fallbackAvatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png';
  return (
    <DescriptionDiv>
      <Image
        src={avatar}
        alt={tag}
        onError={(event) =>
          event.currentTarget.src = fallbackAvatar
        }
      />
      <Username>{username}</Username>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionDiv>
  );
}

// Profile ====================================
export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Card>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Statistics {...stats} />
    </Card>
  );
}

// Types
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
