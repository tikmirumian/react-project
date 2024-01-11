import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <div>Please go to a page that exists</div>
      <p>
        Go to the <NavLink to="/">Home page</NavLink>
      </p>
    </div>
  );
}
