import './UserCard.css';
export default function UserCard(userInfo) {
  return (
    <div className="userCardMain">
      {userInfo.userInfo.map((item) => (
        <div key={item.id}>
          <div className="userCard" key={item.id}>
            <h2> {item.first_name}</h2>
            <div>{item.email}</div>
            <div className="userCardImg">
              <img src={item.avatar}></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
