import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, id, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
