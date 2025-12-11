"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "./Table";
import * as client from "../../client";

export default function PeoplePage() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    if (!cid) return;
    
    try {
      const enrolledUsers = await client.findUsersForCourse(cid as string);
      setUsers(enrolledUsers);
    } catch (error) {
      console.error("Error fetching enrolled users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return (
    <div className="p-4">
      <h3>People</h3>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}

