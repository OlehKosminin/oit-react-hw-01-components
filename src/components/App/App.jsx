
import React from 'react';
import user from '../../components/Profile/User';
import data from '../Statistics/data.json'
import friends from "../FriendListItem/friends.json"
import { Container } from './App.styled';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendListItem/FriendListItem';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </Container>
  );
};
