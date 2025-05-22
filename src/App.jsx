// App.jsx
import { useContext } from 'react';
import { AdminContext, AdminProvider } from './context/AdminContext';

import DashboardShell from './components/DashboardShell';
import LoginForm from './components/LoginForm';

const AppContent = () => {
  const { adminEmail } = useContext(AdminContext);
   console.log("Admin email is:", adminEmail);
  return adminEmail ? <DashboardShell /> : <LoginForm/>;
};

export default function App() {
  return (
    <AdminProvider>
      <AppContent />
    </AdminProvider>
  );
}
