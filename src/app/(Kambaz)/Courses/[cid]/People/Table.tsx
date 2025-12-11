"use client";

import { useState } from "react";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
}

interface TableProps {
  users: any[];
  fetchUsers: () => void;
}

export default function PeopleTable({ users = [], fetchUsers }: TableProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

  const handleUserClick = (userId: string) => {
    setShowUserId(userId);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    fetchUsers();
  };

  return (
    <div>
      <Table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user._id}>
              <td>
                <div
                  style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}
                  onClick={() => handleUserClick(user._id)}
                >
                  <FaUserCircle />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </div>
              </td>
              <td>{user.loginId || user.username || ""}</td>
              <td>{user.section || ""}</td>
              <td>{user.role || ""}</td>
              <td>{user.lastActivity || ""}</td>
              <td>{user.totalActivity || ""}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {showDetails && showUserId && (
        <PeopleDetails
          uid={showUserId}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
}

