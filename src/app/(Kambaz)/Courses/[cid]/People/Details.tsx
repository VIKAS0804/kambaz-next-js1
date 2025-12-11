"use client";

import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FormControl, Button, Form } from "react-bootstrap";
import * as client from "../../../Account/client";

interface PeopleDetailsProps {
  uid: string | null;
  onClose: () => void;
}

export default function PeopleDetails({ uid, onClose }: PeopleDetailsProps) {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState<string>("");
  const [editing, setEditing] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [editingEmail, setEditingEmail] = useState<boolean>(false);
  const [editingRole, setEditingRole] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (!uid) {
        setUser(null);
        return;
      }

      try {
        const fetchedUser = await client.findUserById(uid);
        setUser(fetchedUser);
        setName(`${fetchedUser.firstName || ""} ${fetchedUser.lastName || ""}`.trim());
        setEmail(fetchedUser.email || "");
        setRole(fetchedUser.role || "");
        setEditing(false);
        setEditingEmail(false);
        setEditingRole(false);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [uid]);

  if (!uid || !user) {
    return null;
  }

  const handleSaveName = async () => {
    if (!user) return;

    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    try {
      const updatedUser = {
        ...user,
        firstName,
        lastName,
      };
      const savedUser = await client.updateUser(updatedUser);
      setUser(savedUser);
      setEditing(false);
      onClose();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDeleteUser = async () => {
    if (!user?._id) return;

    try {
      await client.deleteUser(user._id);
      onClose();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveName();
    }
  };

  const handleKeyDownEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveEmail();
    }
  };

  const handleSaveEmail = async () => {
    if (!user) return;

    try {
      const updatedUser = {
        ...user,
        email,
      };
      const savedUser = await client.updateUser(updatedUser);
      setUser(savedUser);
      setEditingEmail(false);
    } catch (error) {
      console.error("Error updating email:", error);
    }
  };

  const handleSaveRole = async () => {
    if (!user) return;

    try {
      const updatedUser = {
        ...user,
        role,
      };
      const savedUser = await client.updateUser(updatedUser);
      setUser(savedUser);
      setEditingRole(false);
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  return (
    <div
      className="position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25"
      style={{ zIndex: 1000, overflowY: "auto" }}
    >
      {/* Close Button */}
      <div className="d-flex justify-content-end mb-3">
        <IoCloseSharp
          size={24}
          style={{ cursor: "pointer" }}
          onClick={onClose}
        />
      </div>

      {/* User Icon */}
      <div className="d-flex justify-content-center mb-3">
        <FaUserCircle size={80} className="text-secondary" />
      </div>

      <hr />

      {/* Name Field (Editable) */}
      <div className="mb-3">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <strong>Name</strong>
          {!editing ? (
            <FaPencil
              size={16}
              style={{ cursor: "pointer" }}
              onClick={() => setEditing(true)}
            />
          ) : (
            <FaCheck
              size={16}
              style={{ cursor: "pointer", color: "green" }}
              onClick={handleSaveName}
            />
          )}
        </div>
        {editing ? (
          <FormControl
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <div
            style={{ cursor: "pointer", padding: "8px", border: "1px solid #dee2e6", borderRadius: "4px" }}
            onClick={() => setEditing(true)}
          >
            {user.firstName} {user.lastName}
          </div>
        )}
      </div>

      {/* Email Field (Editable) */}
      <div className="mb-3">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <strong>Email</strong>
          {!editingEmail ? (
            <FaPencil
              size={16}
              style={{ cursor: "pointer" }}
              onClick={() => setEditingEmail(true)}
            />
          ) : (
            <FaCheck
              size={16}
              style={{ cursor: "pointer", color: "green" }}
              onClick={handleSaveEmail}
            />
          )}
        </div>
        {editingEmail ? (
          <FormControl
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDownEmail}
            autoFocus
          />
        ) : (
          <div
            style={{ cursor: "pointer", padding: "8px", border: "1px solid #dee2e6", borderRadius: "4px" }}
            onClick={() => setEditingEmail(true)}
          >
            {user.email || ""}
          </div>
        )}
      </div>

      {/* Role Field (Editable) */}
      <div className="mb-3">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <strong>Roles</strong>
          {!editingRole ? (
            <FaPencil
              size={16}
              style={{ cursor: "pointer" }}
              onClick={() => setEditingRole(true)}
            />
          ) : (
            <FaCheck
              size={16}
              style={{ cursor: "pointer", color: "green" }}
              onClick={handleSaveRole}
            />
          )}
        </div>
        {editingRole ? (
          <Form.Select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              // Auto-save on change
              setTimeout(() => {
                const updatedUser = {
                  ...user,
                  role: e.target.value,
                };
                client.updateUser(updatedUser).then((savedUser) => {
                  setUser(savedUser);
                  setEditingRole(false);
                }).catch((error) => {
                  console.error("Error updating role:", error);
                });
              }, 0);
            }}
            autoFocus
          >
            <option value="STUDENT">STUDENT</option>
            <option value="FACULTY">FACULTY</option>
            <option value="TA">TA</option>
            <option value="ADMIN">ADMIN</option>
          </Form.Select>
        ) : (
          <div
            style={{ cursor: "pointer", padding: "8px", border: "1px solid #dee2e6", borderRadius: "4px" }}
            onClick={() => setEditingRole(true)}
          >
            {user.role || ""}
          </div>
        )}
      </div>

      {/* Login ID */}
      <div className="mb-3">
        <strong>Login ID</strong>
        <div className="mt-1">{user.loginId || user.username || ""}</div>
      </div>

      {/* Section */}
      <div className="mb-3">
        <strong>Section</strong>
        <div className="mt-1">{user.section || ""}</div>
      </div>

      {/* Total Activity */}
      <div className="mb-3">
        <strong>Total Activity</strong>
        <div className="mt-1">{user.totalActivity || ""}</div>
      </div>

      <hr />

      {/* Buttons */}
      <div className="d-flex gap-2">
        <Button
          variant="danger"
          className="flex-fill"
          onClick={handleDeleteUser}
        >
          Delete
        </Button>
        <Button
          variant="secondary"
          className="flex-fill"
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

