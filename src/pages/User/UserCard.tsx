import './UserCard.css';
import { TUserCardProps } from 'interfaces';

export default function UserCard({ userInfo }: TUserCardProps) {
  return (
    <div key={userInfo.id}>
      <div className="userCard" key={userInfo.id}>
        <h2> {userInfo.first_name}</h2>
        <div>{userInfo.email}</div>
        <div className="userCardImg">
          <img alt="avatar" src={userInfo.avatar}></img>
        </div>
      </div>
    </div>
  );
}
