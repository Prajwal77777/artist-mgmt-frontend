import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (formData: any) => {
    console.log("Login Data:", formData);
    navigate("/dashboard");
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
