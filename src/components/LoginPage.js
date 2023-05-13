import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div
      className="main"
      style={{
        backgroundImage:
          "url('https://baatraining.com/wp-content/uploads/2023/02/trto-a320-hero.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div className="content">
        <h2 className="text-center text-bold mb-3 pt-5">Login Screen</h2>
        <div className="row container mx-auto">
          <div className="col-8 col-md-4 mx-auto">
            <form name="f1">
              <div className="mb-3 row">
                <label
                  for="username"
                  className="col-sm-3 col-form-label text-end"
                >
                  Username
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="t1"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  for="password"
                  className="col-sm-3 col-form-label text-end"
                >
                  Password
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="t2"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row align-items-center">
                <label className="col-sm-3 col-form-label text-end">
                  User Type
                </label>
                <div className="col-sm-9">
                  <select className="form-select" name="t3">
                    <option value="" disabled selected>
                      Select User Type
                    </option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="airline">Airline</option>
                    <option value="recycler">Recycler</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
