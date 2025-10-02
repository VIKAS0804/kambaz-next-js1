import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { MdHistory, MdSlideshow } from "react-icons/md";
import { IoHelpCircle } from "react-icons/io5";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2 overflow-auto"
      style={{ width: 110 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center py-2"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="70px" alt="Northeastern University" />
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-white text-decoration-none d-block"
        >
          <FaRegCircleUser className="fs-2 text-white mb-1" />
          <div><small>Account</small></div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-white text-center py-2">
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className="text-danger text-decoration-none d-block"
        >
          <AiOutlineDashboard className="fs-2 text-danger mb-1" />
          <div><small className="text-danger">Dashboard</small></div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link
          href="/Dashboard"
          id="wd-course-link"
          className="text-white text-decoration-none d-block"
        >
          <LiaBookSolid className="fs-2 text-danger mb-1" />
          <div><small>Courses</small></div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link
          href="#"
          id="wd-calendar-link"
          className="text-white text-decoration-none d-block"
        >
          <IoCalendarOutline className="fs-2 text-danger mb-1" />
          <div><small>Calendar</small></div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link
          href="#"
          id="wd-inbox-link"
          className="text-white text-decoration-none d-block"
        >
          <FaInbox className="fs-2 text-danger mb-1" />
          <div><small>Inbox</small></div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link
          href="#"
          id="wd-history-link"
          className="text-white text-decoration-none d-block"
        >
          <MdHistory className="fs-2 text-danger mb-1" />
          <div><small>History</small></div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link
          href="#"
          id="wd-studio-link"
          className="text-white text-decoration-none d-block"
        >
          <MdSlideshow className="fs-2 text-danger mb-1" />
          <div><small>Studio</small></div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link
          href="#"
          id="wd-help-link"
          className="text-white text-decoration-none d-block"
        >
          <div className="position-relative d-inline-block">
            <IoHelpCircle className="fs-2 text-danger mb-1" />
          </div>
          <div><small>Help</small></div>
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center py-2">
        <Link
          href="/Labs"
          id="wd-labs-link"
          className="text-decoration-none d-block text-white"
        >
          <div className="text-danger fs-2 mb-1">←</div>
          <div><small>Labs</small></div>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}