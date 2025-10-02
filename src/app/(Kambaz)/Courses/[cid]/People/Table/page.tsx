import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Riya</span>{" "}
          <span className="wd-last-name">Kapoor</span></td>
      <td className="wd-login-id">001234565S</td>
      <td className="wd-section">S102</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2021-01-15</td>
      <td className="wd-total-activity">12:45:30</td></tr>

      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Arjun</span>{" "}
          <span className="wd-last-name">Singh</span></td>
      <td className="wd-login-id">001234566S</td>
      <td className="wd-section">S102</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2021-02-10</td>
      <td className="wd-total-activity">14:20:15</td></tr>

      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Meera</span>{" "}
          <span className="wd-last-name">Nair</span></td>
      <td className="wd-login-id">001234567S</td>
      <td className="wd-section">S102</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2021-03-05</td>
      <td className="wd-total-activity">18:30:45</td></tr>

      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Kabir</span>{" "}
          <span className="wd-last-name">Malhotra</span></td>
      <td className="wd-login-id">001234568S</td>
      <td className="wd-section">S102</td>
      <td className="wd-role">TA</td>
      <td className="wd-last-activity">2021-04-01</td>
      <td className="wd-total-activity">20:15:50</td></tr>
    </tbody>
   </Table>
  </div> );}