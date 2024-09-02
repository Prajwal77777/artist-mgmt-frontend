import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const handleRegister = async (formData: any) => {
    formData = JSON.stringify(formData);
    console.log(formData);
    const response = await axios({
      url: "http://127.0.0.1:8000/auth/user/register/",
      method: "POST",
      data: formData,
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        toast.success("Registered Succesfully");
        navigate("/login");
      })
      .catch((error: AxiosError) => {
        const error_data = error.response?.data as { message: string };
        toast.error(`${error_data.message}`);
      });
  };

  return (
    <MDBContainer
      fluid
      className="bg-primary d-flex justify-content-center align-items-center vh-100"
    >
      <MDBRow>
        <MDBCol>
          <RegisterForm onSubmit={handleRegister} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
