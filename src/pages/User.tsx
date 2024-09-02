import { toast } from "react-toastify";
import Table from "../components/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "http://localhost:8000";

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  address: string;
}

const User: React.FC = () => {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/auth/user/get_users/`);
        setUserData(response.data.data);
      } catch (error) {
        toast.error("Error fetching users.");
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const userColumns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "first_name",
      header: "First Name",
    },
    {
      accessorKey: "last_name",
      header: "Last Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
  ];

  return (
    <div>
      <h1>User page</h1>
      <Table data={userData} columns={userColumns} />
    </div>
  );
};

export default User;
