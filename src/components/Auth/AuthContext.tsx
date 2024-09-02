import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../services/api";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("access_token")
  );
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const data = await api.login(email, password);
      localStorage.setItem("access_token", data.token);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (error) {
      setIsAuthenticated(false);
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
