import React, { useState } from "react";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState("");

  const { email, password } = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const login = (e) => {
    e.preventDefault();

    console.log(state);
    // dispatch(loginusers(state));
    //alert(`User login Successfully`);
    setSuccess(`User login Successfully with ${state.email}`);
    localStorage.setItem("token", state.email);

    window.location.href = "/home";
  };
  return (
    <>
      <div className="container mx-10 my-4">
        <form onSubmit={login}>
          <div className="row">
            <div className="mb-4">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="password"
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            className="btn btn-primary btn-block mb-4"
            type="submit"
            disabled={!state.email || !state.password}
          >
            Sign in
          </button>
        </form>
        {success && <span className="text-success">{success}</span>}

        {/* <span className="text-danger">Please fill out this field.</span> */}
      </div>
    </>
  );
}

export default Login;
