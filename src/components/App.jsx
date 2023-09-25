import { Profile } from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics'
import { FriendList} from 'components/FriendList/FriendList'
import user from 'data-files/user.json';
import data from 'data-files/data.json';
import friends from 'data-files/friends.json';
import transactions from '../data-files/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics title="Upload stats" statistics={data} />
      
      <FriendList friends={friends} />
    </div>
  );
};
