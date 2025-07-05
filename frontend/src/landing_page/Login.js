import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        formData
      );

      if (response.status === 200) {
        console.log("Signup successful");
        console.log(response.status);
        window.location.href = `http://localhost:3001/`;
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Check your console.");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/zerodha.jpg"
            style={{ height: "110%", width: "105%", margin: "0px" }}
            alt="Zerodha Banner"
          />
        </div>
        <div className="col-6">
          <div
            className="signin"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form
              style={{ width: "330px", marginTop: "140px" }}
              onSubmit={handleSubmit}
            >
              <h1 className="h3 mb-4 text-muted mt-5 fw-normal">Log in</h1>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="username">Username</label>
              </div>

              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                <label htmlFor="password">Password</label>
              </div>

              <button
                className="btn btn-primary mt-5 mb-3 w-50 py-2"
                type="submit"
                style={{ marginLeft: "21%" }}
              >
                Sign in
              </button>
            </form>
          </div>
          <Link
            to="/signup"
            style={{ textDecoration: "none", marginLeft: "200px" }}
          >
            Don't have an account{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
