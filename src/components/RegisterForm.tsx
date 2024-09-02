import React, { useState } from "react";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

interface RegisterFormProps {
  onSubmit: (data: any) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    role: "",
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
      <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
      <p className="text-white-50 mb-5">Create your account</p>

      <button
        className="btn btn-primary text-white-50 mb-3"
        onClick={() => navigate("/login")}
      >
        Back to Login
      </button>

      <MDBInput
        wrapperClass="mb-4 mx-5 w-100"
        labelClass="text-white"
        label="Full Name"
        id="full_name"
        type="text"
        size="lg"
        name="full_name"
        onChange={handleChange}
      />

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
      <select
        className="form-select mb-4 mx-5 w-100"
        name="role"
        onChange={handleChange}
      >
        <option value="">Select Role</option>
        <option value="artist_manager">Artist Manager</option>
        <option value="artist">Artist</option>
      </select>

      <MDBBtn
        outline
        className="mx-2 px-5"
        color="white"
        size="lg"
        onClick={handleSubmit}
      >
        Register
      </MDBBtn>
    </div>
  );
};

export default RegisterForm;
