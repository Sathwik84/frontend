import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Profile() {
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/profile", { credentials: "include" })
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  const save = async () => {
    await fetch("http://localhost:5000/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(user)
    });
    setEdit(false);
  };

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="profile-card">
          <h2>My Profile</h2>

          <label>Name</label>
          <input
            className="input"
            disabled={!edit}
            value={user.name || ""}
            onChange={e => setUser({ ...user, name: e.target.value })}
          />

          <label>Email</label>
          <input
            className="input"
            disabled
            value={user.email || ""}
          />

          <label>Gender</label>
          <input
            className="input"
            disabled={!edit}
            value={user.gender || ""}
            onChange={e => setUser({ ...user, gender: e.target.value })}
          />

          <label>Date of Birth</label>
          <input
            className="input"
            type="date"
            disabled={!edit}
            value={user.dob || ""}
            onChange={e => setUser({ ...user, dob: e.target.value })}
          />

          {!edit ? (
            <button className="btn" onClick={() => setEdit(true)}>
              Edit Profile
            </button>
          ) : (
            <button className="btn" onClick={save}>
              Save Changes
            </button>
          )}
        </div>
      </div>
    </>
  );
}
