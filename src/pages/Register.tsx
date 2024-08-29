import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Form from "../components/Form";

function Register() {
  const handleRegister = (formData: any) => {
    console.log("Register Data:", formData);
  };

  return (
    <MDBContainer
      fluid
      className="bg-primary d-flex justify-content-center align-items-center vh-100"
    >
      <MDBRow>
        <MDBCol>
          <Form type="register" onSubmit={handleRegister} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
