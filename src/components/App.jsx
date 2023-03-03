import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import user from '../user.json'; 
import statsInfo from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export default function App() {
  return <div><Profile avatar={user.avatar} username={user.username} tag={user.tag} location={user.location} stats={user.stats} />
    <Statistics stats={statsInfo} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </div>
}
