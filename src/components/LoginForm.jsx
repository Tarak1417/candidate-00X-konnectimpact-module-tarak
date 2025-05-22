// components/LoginForm.jsx
import { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminContext';

const LoginForm = () => {
  const { login } = useContext(AdminContext);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email); // Mock login
  };

  return (
    <div className="card" style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder="Email" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
