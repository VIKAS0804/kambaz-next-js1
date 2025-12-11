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
    "People",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades"
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const href = `/Courses/${cid}/${link}`;
        
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