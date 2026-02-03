import "../styles/auth.css";

export default function Dashboard() {
  const user = localStorage.getItem("user");

  function logout() {
    localStorage.removeItem("user");
    window.history.back();
  }

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-box">
        <h1>Welcome, {user}!</h1>
        <p>This is your dashboard.</p>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
