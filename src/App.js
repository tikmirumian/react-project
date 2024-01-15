import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="users">Users</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="register">Register</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/users" element={<Users />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
