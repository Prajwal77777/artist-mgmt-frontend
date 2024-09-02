import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Artist from "./pages/Artist";
import Song from "./pages/Song";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { AuthProvider } from "./components/Auth/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Sidebar>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/artist" element={<Artist />} />
                    <Route path="/songs" element={<Song />} />
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                  </Routes>
                </Sidebar>
              </ProtectedRoute>
            }
          />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthProvider>
    </Router>
  );
}

export default App;
