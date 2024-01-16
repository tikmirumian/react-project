import './Login.css';
import { useState } from 'react';
export default function Login() {
  const [isUserLogin, setIsUserLogin] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.target);
      const loginData = [...data.entries()];
      const newData = loginData.reduce((acc, cur) => {
        acc[cur[0]] = cur[1];
        return acc;
      }, {});
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(newData)
      });
      if (res.status !== 200) {
        setIsUserLogin(false);
        return;
      }
      const response = await res.json();
      if (response.token) {
        setIsUserLogin(true);
        return;
      }
      setIsUserLogin(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="loginMain">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="label">
          Email:
          <input className="input" id="email" name="email" placeholder="Email" required></input>
        </label>
        <label htmlFor="password" className="label">
          Password:
          <input
            type="password"
            className="input"
            id="password"
            name="password"
            placeholder="Password"
            required></input>
        </label>
        <button className="button">Login</button>
      </form>
      <div>
        {isUserLogin && <h3>You are logged in</h3>}
        {isUserLogin === false && <h3>Wrong username or password</h3>}
      </div>
    </div>
  );
}
