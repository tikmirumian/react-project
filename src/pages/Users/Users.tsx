import './Users.css';
import { useEffect, useState } from 'react';
import UserCard from '../User/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { TUserInfo } from '../../interfaces';
import { reducer } from '../../store';

export default function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<undefined | string>();
  const [switchPage, setSwitchPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const state = useSelector((state: ReturnType<typeof reducer>) => state);
  const dispatch = useDispatch();
  const newTotal = [];
  for (let i = 0; i < totalPage; i++) {
    newTotal.push(i + 1);
  }

  useEffect(() => {
    if (state[switchPage]) {
      return;
    }

    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://reqres.in/api/users?per_page=3&page=${switchPage} `);
        const user = await res.json();
        setTotalPage(user.total_pages);
        setSwitchPage(user.page);
        dispatch({
          type: 'AddState',
          payload: {
            page: user.page,
            data: user.data
          }
        });
      } catch (err) {
        setError((err as { message: string }).message);
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
      <main className="main">
        {state[switchPage] &&
          state[switchPage].map((item: TUserInfo) => (
            <div key={item.id}>
              <UserCard userInfo={item} />
            </div>
          ))}
      </main>
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
