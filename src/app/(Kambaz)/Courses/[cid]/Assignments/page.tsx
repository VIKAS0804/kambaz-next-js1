"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { FaFileLines } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  const deleteAssignmentHandler = (assignmentId: string) => {
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div>
      <AssignmentsControls />
      <br />
      
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <strong>ASSIGNMENTS</strong>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3 text-muted">40% of Total</span>
              <button className="btn btn-outline-secondary btn-sm me-2">+</button>
              <BsThreeDotsVertical />
            </div>
          </div>
          
          <ListGroup className="wd-assignments rounded-0">
            {courseAssignments.map((assignment) => (
              <ListGroupItem 
                key={assignment._id} 
                className="wd-assignment p-3 ps-1 d-flex align-items-center"
              >
                <BsGripVertical className="me-3 fs-4" />
                <FaFileLines className="me-3 fs-4 text-success" />
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <Link 
                        href={`/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-decoration-none"
                      >
                        <strong className="text-dark">{assignment.title}</strong>
                      </Link>
                      <div className="text-muted small">
                        <span className="text-danger">Multiple Modules</span> | 
                        <span> Not available until {new Date(assignment.available).toLocaleDateString()}</span>
                      </div>
                      <div className="text-muted small">
                        <strong>Due</strong> {new Date(assignment.due).toLocaleDateString()} | {assignment.points} pts
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaTrash 
                        className="text-danger me-2 mb-1" 
                        onClick={() => deleteAssignmentHandler(assignment._id)}
                        style={{ cursor: "pointer" }}
                      />
                      <IoCheckmarkCircle className="text-success fs-4 me-2" />
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}