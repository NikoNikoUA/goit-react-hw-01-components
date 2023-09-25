import PropTypes from 'prop-types';
import friends from '/src/data-files/friends.json';

export function FriendList({ avatar, name, id, isOnline }) {
  const online = true;
  <li class="item" key={id}>
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
  </li>;
}

<FriendList people={friends} />;

FriendList.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
