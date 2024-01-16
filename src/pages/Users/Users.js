import './Users.css';
import { useEffect, useState } from 'react';
import User from '../User/UserCard';
export default function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();
  const [switchPage, setSwitchPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const newTotal = [];
  for (let i = 0; i < totalPage; i++) {
    newTotal.push(i + 1);
  }
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://reqres.in/api/users?per_page=3&page=${switchPage} `);
        const user = await res.json();
        setUserInfo(user);
        setTotalPage(user.total_pages);
        setSwitchPage(user.page);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    void fetchUsers();
  }, [switchPage]);

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
      <div className="footer">
        <div className="footerMain">
          {totalPage !== 0 &&
            newTotal.map((num, index) => {
              return (
                <div
                  className={`buttonNum ${switchPage === num ? 'active' : ''}`}
                  onClick={() => {
                    setSwitchPage(num);
                  }}
                  key={index}>
                  {num}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
