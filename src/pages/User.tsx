import Table from "../components/Table";
import React from "react";

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
  const userData: UserData[] = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone: "123343",
      dob: "1990-01-01",
      gender: "Male",
      address: "123 Main St",
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Smith",
      email: "john.smith@example.com",
      phone: "123343",
      dob: "1990-01-01",
      gender: "Male",
      address: "123 Main St",
    },
  ];

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
