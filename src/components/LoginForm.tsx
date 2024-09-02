import React, { useState } from "react";
import { MDBBtn, MDBInput, MDBIcon } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  onSubmit: (data: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div
      className="bg-dark text-white p-5 d-flex flex-column align-items-center mx-auto w-100"
      style={{ borderRadius: "1rem", maxWidth: "400px" }}
    >
      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
      <p className="text-white-50 mb-5">
        Please enter your login and password!
      </p>

      <MDBInput
        wrapperClass="mb-4 mx-5 w-100"
        labelClass="text-white"
        label="Email address"
        id="email"
        type="email"
        size="lg"
        name="email"
        onChange={handleChange}
      />
      <MDBInput
        wrapperClass="mb-4 mx-5 w-100"
        labelClass="text-white"
        label="Password"
        id="password"
        type="password"
        size="lg"
        name="password"
        onChange={handleChange}
      />

      <MDBBtn
        outline
        className="mx-2 px-5"
        color="white"
        size="lg"
        onClick={handleSubmit}
      >
        Login
      </MDBBtn>

      <div className="d-flex flex-row mt-3 mb-5">
        <MDBBtn tag="a" color="none" className="m-3" style={{ color: "white" }}>
          <MDBIcon fab icon="facebook-f" size="lg" />
        </MDBBtn>
        <MDBBtn tag="a" color="none" className="m-3" style={{ color: "white" }}>
          <MDBIcon fab icon="twitter" size="lg" />
        </MDBBtn>
        <MDBBtn tag="a" color="none" className="m-3" style={{ color: "white" }}>
          <MDBIcon fab icon="google" size="lg" />
        </MDBBtn>
      </div>

      <div>
        <p className="mb-0">
          Don't have an account?{" "}
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
            className="text-white-50 fw-bold"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
