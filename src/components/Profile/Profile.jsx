import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PhotoContainer,
  Images,
  Name,
  UserData,
  List,
  Item,
  UserStats,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <PhotoContainer>
        <Images src={avatar} alt={tag} />
        <Name>{username}</Name>
        <UserData key={tag}>{tag}</UserData>
        <UserData>{location}</UserData>
      </PhotoContainer>

      <List>
        <Item>
          <UserStats>Followers</UserStats>
          <UserStats>{stats.followers}</UserStats>
        </Item>
        <Item>
          <UserStats>Views</UserStats>
          <UserStats>{stats.views}</UserStats>
        </Item>
        <Item>
          <UserStats>Likes</UserStats>
          <UserStats>{stats.likes}</UserStats>
        </Item>
      </List>
    </Container>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
