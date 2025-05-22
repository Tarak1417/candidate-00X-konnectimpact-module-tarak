// components/DashboardShell.jsx
import CampaignTable from './CampaignTable';
import CreateCampaignForm from './CreateCampaignForm';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';

const DashboardShell = () => {
  const { logout } = useContext(AdminContext);
  return (
    <div>
      <header style={{ padding: "1rem", backgroundColor: "var(--trust-blue)", color: "white" }}>
        <h2>Partner Admin Dashboard</h2>
        <button onClick={logout}>Logout</button>
      </header>
      <main style={{ padding: "1rem" }}>
        <CreateCampaignForm />
        <CampaignTable />
      </main>
    </div>
  );
};
export default DashboardShell;