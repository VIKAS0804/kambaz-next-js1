import Link from "next/link";
import { FormControl } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-signin-screen">
      <h1>Profile</h1>
      <FormControl id="wd-username" placeholder="username" className="mb-2" defaultValue="alice"/>
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        defaultValue="123"
      />
      <FormControl id="wd-firstname" placeholder="First Name" className="mb-2" defaultValue="Alice"/>
      <FormControl id="wd-lastname" placeholder="Last Name" className="mb-2" defaultValue="Wonderland"/>
      <FormControl id="wd-dob" type="date" placeholder="username" className="mb-2" defaultValue="01-01-2000"/>
      <FormControl id="wd-email" type="email" placeholder="email" className="mb-2" defaultValue="alice@wonderland"/>
      <FormControl as="select" id="wd-role" className="mb-2" defaultValue="FACULTY">
        <option value="USER">User</option> <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> 
        <option value="STUDENT">Student</option>
      </FormControl>
      <Link
        id="wd-signup-btn"
        href="/Account/Signin"
        className="btn btn-primary w-100 mb-2 btn-danger"
      >
        Sign out{" "}
      </Link>
    </div>
  );
}

<div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        defaultValue="alice"
        placeholder="username"
        className="wd-username"
      />
      <br />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
      />
      <br />
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" />
      <br />
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
      />
      <br />
      <input defaultValue="2000-01-01" type="date" id="wd-dob" />
      <br />
      <input defaultValue="alice@wonderland" type="email" id="wd-email" />
      <br />
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option> <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>{" "}
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link href="Signin"> Sign out </Link>
    </div>
