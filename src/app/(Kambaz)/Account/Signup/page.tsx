"use client";
import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { useRouter } from "next/navigation";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const router = useRouter();

  const signup = async () => {
    try {
      const newUser = await client.signup(user);
      if (!newUser) {
        alert("Signup failed. Please try again.");
        return;
      }
      dispatch(setCurrentUser(newUser));
      router.push("/Dashboard");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign up</h1>
      <FormControl
        id="wd-username"
        placeholder="username"
        className="mb-2"
        value={user.username}
        onChange={(e) =>
          setUser({ ...user, username: e.target.value })
        }
      />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        value={user.password}
        onChange={(e) =>
          setUser({ ...user, password: e.target.value })
        }
      />
      <Button
        id="wd-signup-btn"
        onClick={signup}
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </Button>
      <br />
      <Link id="wd-signin-link" href="/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}
