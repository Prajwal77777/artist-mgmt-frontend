import React, { useState } from "react";
import { MDBBtn, MDBInput, MDBIcon } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

interface FormProps {
  type: "login" | "register";
  onSubmit: (data: any) => void;
}

const Form: React.FC<FormProps> = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
      <h2 className="fw-bold mb-2 text-uppercase">
        {type === "login" ? "Login" : "Register"}
      </h2>
      <p className="text-white-50 mb-5">
        {type === "login"
          ? "Please enter your login and password!"
          : "Create your account"}
      </p>

      {type === "register" && (
        <>
          <button
            className="btn btn-primary text-white-50 mb-3"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </button>
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="First Name"
            id="firstName"
            type="text"
            size="lg"
            name="firstName"
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Last Name"
            id="lastName"
            type="text"
            size="lg"
            name="lastName"
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Phone"
            id="phone"
            type="tel"
            size="lg"
            name="phone"
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Date of Birth"
            id="dob"
            type="date"
            size="lg"
            name="dob"
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Address"
            id="address"
            type="text"
            size="lg"
            name="address"
            onChange={handleChange}
          />
          <select
            className="form-select mb-4 mx-5 w-100"
            aria-label="Default select example"
            name="gender"
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </>
      )}

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
        {type === "login" ? "Login" : "Register"}
      </MDBBtn>

      {type === "login" && (
        <div className="d-flex flex-row mt-3 mb-5">
          <MDBBtn
            tag="a"
            color="none"
            className="m-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="facebook-f" size="lg" />
          </MDBBtn>
          <MDBBtn
            tag="a"
            color="none"
            className="m-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="twitter" size="lg" />
          </MDBBtn>
          <MDBBtn
            tag="a"
            color="none"
            className="m-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="google" size="lg" />
          </MDBBtn>
        </div>
      )}

      {type === "login" && (
        <div>
          <p className="mb-0">
            Don't have an account?{" "}
            <a
              href="#!"
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
      )}
    </div>
  );
};

export default Form;
