// components/CampaignTable.jsx
const campaigns = [
  { name: "Earth Day 2025", status: "Active", points: 10400, fees: "$2,300" },
  { name: "Back to School", status: "Completed", points: 8900, fees: "$1,500" },
];

const CampaignTable = () => (
  <div className="card">
    <h3>Partner Campaigns</h3>
    <table aria-label="Partner Campaigns Table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Points Processed</th>
          <th>Fees Earned</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((c, i) => (
          <tr key={i}>
            <td>{c.name}</td>
            <td>{c.status}</td>
            <td>{c.points}</td>
            <td>{c.fees}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
