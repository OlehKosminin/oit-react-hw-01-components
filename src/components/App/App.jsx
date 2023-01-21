
import React from 'react';
import user from '../../components/Profile/User';
import data from '../Statistics/data.json'
import friends from "../FriendListItem/friends.json"
import trasactions from 'components/TransactionHistory/transactions.json';

import { Container } from './App.styled';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendListItem/FriendListItem';
import Trasaction from 'components/TransactionHistory/TransactionHistory';

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
      <FriendList friends={friends} />
      <Trasaction items={trasactions} />
    </Container>
  );
};
