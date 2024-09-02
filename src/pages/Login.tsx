import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../components/Auth/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (formData: any) => {
    try {
      const { email, password } = formData;
      await login(email, password);
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
          <LoginForm onSubmit={handleLogin} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
