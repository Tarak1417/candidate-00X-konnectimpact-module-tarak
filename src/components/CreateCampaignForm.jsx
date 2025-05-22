// components/CreateCampaignForm.jsx
import { useState } from "react";

const CreateCampaignForm = () => {
  const [form, setForm] = useState({ name: "", start: "", end: "", rate: "" });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Campaign name is required.";
    if (!form.start || !form.end) errs.dates = "Start and end dates are required.";
    if (form.rate <= 0) errs.rate = "Conversion rate must be positive.";
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      console.log("Campaign created:", form);
    } else {
      setErrors(errs);
    }
  };

  return (
    <div className="card">
      <h3>Create Campaign</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Campaign Name" value={form.name} onChange={handleChange} />
        <input type="date" name="start" value={form.start} onChange={handleChange} />
        <input type="date" name="end" value={form.end} onChange={handleChange} />
        <input type="number" name="rate" placeholder="Conversion Rate" value={form.rate} onChange={handleChange} />
        <button type="submit">Submit</button>
        {Object.values(errors).map((e, i) => <p key={i} style={{ color: 'red' }}>{e}</p>)}
      </form>
    </div>
  );
};
export default CreateCampaignForm;