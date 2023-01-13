import React from "react";
import { useState } from "react";

const UserForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [firstNameErrors, setFirstNameErrors] = useState(null);
  const [lastNameErrors, setLastNameErrors] = useState(null);
  const [emailErrors, setEmailErrors] = useState(null);
  const [passErrors, setPassErrors] = useState(null);
  const [cpassErrors, setCpassErrors] = useState(null);

  const firstNameHandler = (e) =>{
    setfirstName(e.target.value);
  if (e.target.value.length < 2){
    setFirstNameErrors("First name muse be at least 2 characters.");
  } else{
    setFirstNameErrors(null);
  }
  }

  const lastNameHandler = (e) =>{
    setlastName(e.target.value);
  if (e.target.value.length < 2){
    setLastNameErrors("Last name muse be at least 2 characters.");
  } else{
    setLastNameErrors(null);
  }
  }

  const emailHandler = (e) =>{
    setEmail(e.target.value);
  if (e.target.value.length < 5){
    setEmailErrors("Last name muse be at least 5 characters.");
  } else{
    setEmailErrors(null);
  }
  }

  const passHandler = (e) =>{
    setPass(e.target.value);
  if (e.target.value.length < 8){
    setPassErrors("Last name muse be at least 8 characters.");
  } else{
    setPassErrors(null);
  }
  }

  const cpassHandler = (e) =>{
    setCpass(e.target.value);
  if (e.target.value.length < 8){
    setCpassErrors("Last name muse be at least 8 characters.");
  } else if (pass !== cpass){
    setCpassErrors("Passwords must match");
  } else{
    setCpassErrors(null);
  }
  }


  return (
    <div className="card">
      <h5 className="card-header">Create User</h5>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
              value={firstName}
              onChange={firstNameHandler}
            ></input>
            {
              firstNameErrors &&
              <span className="form-text text-danger">
                {firstNameErrors}
              </span>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control"
              value={lastName}
              onChange={lastNameHandler}
            ></input>
            {
              lastNameErrors &&
              <span className="form-text text-danger">
                {lastNameErrors}
              </span>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={email}
              onChange={emailHandler}
            ></input>
            {
              emailErrors &&
              <span className="form-text text-danger">
                {emailErrors}
              </span>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="pass"
              id="pass"
              className="form-control"
              value={pass}
              onChange={passHandler}
            ></input>
            {
              passErrors &&
              <span className="form-text text-danger">
                {passErrors}
              </span>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="cpass" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              name="cpass"
              id="cpass"
              className="form-control"
              value={cpass}
              onChange={cpassHandler}
            ></input>
            {
              cpassErrors &&
              <span className="form-text text-danger">
                {cpassErrors}
              </span>
            }
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Create User
            </button>
          </div>
        </form>
        <div className="container">
          <div className="mt-3">
              <p>Your Form Data</p>
            </div>
            <div className="mt-3">
              <p>First Name: {firstName}</p>
            </div>
            <div className="mt-3">
              <p>Last Name: {lastName}</p>
            </div>
            <div className="mt-3">
              <p>E-mail: {email}</p>
            </div>
            <div className="mt-3">
              <p>Password: {pass}</p>
            </div>
            <div className="mt-3">
              <p>Confirm Password: {cpass}</p>
            </div>
                </div>
        </div>
    </div>
  );
};

export default UserForm;
