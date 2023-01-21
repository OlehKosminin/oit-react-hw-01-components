import React from 'react';
import PropTypes from 'prop-types';
import { List,Item,Avatar,Status,Name} from "./FriendListItem.styled"


const FriendList = ({friends}) => {
    return <List>
            {friends.map( friend => (
    <Item key={friend.id}>
        <Status >{friend.isOnline }</Status>
        <Avatar src={friend.avatar} alt={friend.name} width="48" />
        <Name >{ friend.name}</Name>
                </Item> 
))}
        </List>
}

export default FriendList;

FriendList.propTypes = {
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
}