// context/AdminContext.jsx
import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [adminEmail, setAdminEmail] = useState(null);
  const login = (email) => setAdminEmail(email);
  const logout = () => setAdminEmail(null);

  return (
    <AdminContext.Provider value={{ adminEmail, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};
