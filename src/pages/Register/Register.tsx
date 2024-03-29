import './Register.css';
import { FormEvent, useState } from 'react';

export default function Register() {
  const [isUserRegister, setIsUserRegister] = useState<null | boolean>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = new FormData(e.target as HTMLFormElement);
      const loginData = [...data.entries()];
      const newData = loginData.reduce(
        (acc, cur) => {
          acc[cur[0]] = cur[1];
          return acc;
        },
        {} as Record<string, string | FormDataEntryValue>
      );
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      const res = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(newData)
      });
      if (res.status !== 200) {
        setIsUserRegister(false);
        return;
      }
      const response: { token: string } = await res.json();
      if (response.token) {
        setIsUserRegister(true);
        return;
      }
      setIsUserRegister(false);
    } catch (err) {
      console.info(err);
    }
  };

  return (
    <div className="registerMain">
      <h2>Register</h2>
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
        <button className="button">Register</button>
      </form>
      <div>
        {isUserRegister && <h3>ou have registered successfully</h3>}
        {isUserRegister === false && <h3>Something went wrong</h3>}
      </div>
    </div>
  );
}
