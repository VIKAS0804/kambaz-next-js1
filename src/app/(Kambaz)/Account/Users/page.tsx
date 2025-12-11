"use client";

import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FormControl, Button } from "react-bootstrap";
import PeopleTable from "../../Courses/[cid]/People/Table";
import * as client from "../client";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState<string>("");
  const [name, setName] = useState<string>("");

  const fetchUsers = async () => {
    try {
      const allUsers = await client.findAllUsers();
      setUsers(allUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const filterUsersByRole = async (selectedRole: string) => {
    setRole(selectedRole);
    setName(""); // Clear name filter when role changes
    
    try {
      if (selectedRole === "" || selectedRole === "All Roles") {
        await fetchUsers();
      } else {
        const filteredUsers = await client.findUsersByRole(selectedRole);
        setUsers(filteredUsers);
      }
    } catch (error) {
      console.error("Error filtering users by role:", error);
    }
  };

  const filterUsersByName = async (searchName: string) => {
    setName(searchName);
    
    try {
      if (!searchName || searchName.trim() === "") {
        // If name is empty, use role filter or fetch all
        if (role && role !== "" && role !== "All Roles") {
          const filteredUsers = await client.findUsersByRole(role);
          setUsers(filteredUsers);
        } else {
          await fetchUsers();
        }
      } else {
        const filteredUsers = await client.findUsersByPartialName(searchName);
        setUsers(filteredUsers);
      }
    } catch (error) {
      console.error("Error filtering users by name:", error);
    }
  };

  const createUser = async () => {
    try {
      const newUser = {
        firstName: "New",
        lastName: `User${users.length + 1}`,
        username: `newuser${Date.now()}`,
        password: "password123",
        email: `newuser${users.length + 1}@northeastern.edu`,
        section: "S101",
        role: "STUDENT",
      };

      const createdUser = await client.createUser(newUser);
      setUsers([...users, createdUser]);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Users</h3>
        <Button
          variant="danger"
          onClick={createUser}
          className="d-flex align-items-center gap-2"
        >
          <FaPlus />
          People
        </Button>
      </div>

      <div className="mb-4">
        <FormControl
          type="text"
          placeholder="Search people"
          className="float-start w-25 me-2 wd-filter-by-name"
          value={name}
          onChange={(e) => filterUsersByName(e.target.value)}
        />
        <select
          className="form-select float-start w-25 wd-select-role"
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>
        <div className="clearfix"></div>
      </div>

      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}

