import { Profile } from 'components/Profile/Profile'
import { Statistics } from 'components/Statistics/Statistics'
import { FriendList } from 'components/FriendList/FriendList'
import { TransactionHistory} from 'components/TransactionHistory/TransactionHistory'
import user from 'data-files/user.json';
import data from 'data-files/data.json';
import friends from 'data-files/friends.json';
import transactions from 'data-files/transactions.json';

import css from './App.module.css'

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats} />
      
      <Statistics title="Upload stats" statistics={data} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
