"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function CourseNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();
  
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People"
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const href = link === "People" 
          ? `/Courses/${cid}/People/Table` 
          : `/Courses/${cid}/${link}`;
        
        const isActive = pathname.includes(link);
        
        return (
          <ListGroupItem
            key={link}
            as={Link}
            href={href}
            className={`border-0 ${isActive ? "active" : "text-danger"}`}
            id={`wd-course-${link.toLowerCase()}-link`}
          >
            {link}
          </ListGroupItem>
        );
      })}
    </div>
  );
}