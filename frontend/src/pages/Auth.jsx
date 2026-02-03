import { useState } from "react";
import "../styles/auth.css";
import { apiLogin, apiRegister } from "../api";

export default function Auth() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [banner, setBanner] = useState(null); 

  async function handleSignIn(e) {
    e.preventDefault();
    setBanner(null);

    if (!username.trim() || !password.trim()) {
      setBanner({ type: "error", text: "Fields cannot be empty" });
      return;
    }

    try {
      const res = await apiLogin(username, password);
      const text = await res.text();

      if (res.ok) {
        setBanner({ type: "success", text });
        localStorage.setItem("user", username);
        window.location.href = "/dashboard";
      } else {
        setBanner({ type: "error", text });
      }
    } catch {
      setBanner({ type: "error", text: "Something went wrong. Please try again." });
    }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    setBanner(null);

    if (!username.trim() || !password.trim()) {
      setBanner({ type: "error", text: "Fields cannot be empty" });
      return;
    }

    try {
      const res = await apiRegister(username, password);
      const text = await res.text();

      if (res.ok) {
        setBanner({ type: "success", text }); 
        setIsRightPanelActive(false); 
      } else {
        setBanner({ type: "error", text });
      }
    } catch {
      setBanner({ type: "error", text: "Something went wrong. Please try again." });
    }
  }

  return (
    <>
      {banner && (
        <div className={`top-banner ${banner.type === "error" ? "error" : "success"}`}>
          {banner.text}
        </div>
      )}

      <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>

        {/* SIGN UP */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* SIGN IN */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn}>
            <h1>Sign In</h1>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* OVERLAY */}
        <div className="overlay-container">
          <div className="overlay">

            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>If you already have an account, sign in here</p>
              <button
                className="ghost"
                onClick={() => {
                  setIsRightPanelActive(false);
                  setBanner(null);
                }}
              >
                Sign In
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start your journey with us</p>
              <button
                className="ghost"
                onClick={() => {
                  setIsRightPanelActive(true);
                  setBanner(null);
                }}
              >
                Sign Up
              </button>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
