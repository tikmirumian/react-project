import './Users.css';
import { useEffect, useState } from 'react';
import User from '../User/UserCard';
export default function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://reqres.in/api/users?per_page=3 ');
        const user = await res.json();
        setUserInfo(user);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (isLoading) {
    return <h1>...loading</h1>;
  }

  if (error) {
    return <h1>Something went wrong! Please try again</h1>;
  }
  return (
    <>
      <header className="header">
        <h1>Hello ReqRes users!</h1>
      </header>
      <main>{userInfo && <User userInfo={userInfo.data} />}</main>
    </>
  );
}
