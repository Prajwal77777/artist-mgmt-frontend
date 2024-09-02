import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/api";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (formData: any) => {
    try {
      const { email, password } = formData;
      const result = await login(email, password);
      localStorage.setItem("access_token", result.token);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <MDBContainer
      fluid
      className="bg-primary d-flex justify-content-center align-items-center vh-100"
    >
      <MDBRow>
        <MDBCol>
          <Form type="login" onSubmit={handleLogin} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
