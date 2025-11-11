"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { FaFileLines } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Assignments() {
  const { cid, aid } = useParams();

  return (
    <div>
      <AssignmentsControls />
      <br />
      
      {/* ASSIGNMENTS SECTION */}
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
            <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-3 fs-4" />
              <FaFileLines className="me-3 fs-4 text-success" />
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <Link href={`/Courses/${cid}/Assignments/${aid}`}
                      className="wd-assignment-link"
                    >
                    <strong className="text-dark">A1</strong>
                    </Link>
                    <div className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> | 
                      <span> Not available until May 6 at 12:00am</span>
                    </div>
                    <div className="text-muted small">
                      <strong>Due</strong> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <IoCheckmarkCircle className="text-success fs-4 me-2" />
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </div>
            </ListGroupItem>
            
            <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-3 fs-4 text-muted" />
              <FaFileLines className="me-3 fs-4 text-success" />
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <Link href={`/Courses/${cid}/Assignments/${aid}`}
                      className="wd-assignment-link"
                    >
                    <strong className="text-dark">A2</strong>
                    </Link>
                    <div className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> | 
                      <span> Not available until May 13 at 12:00am</span>
                    </div>
                    <div className="text-muted small">
                      <strong>Due</strong> May 20 at 11:59pm | 100 pts
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <IoCheckmarkCircle className="text-success fs-4 me-2" />
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </div>
            </ListGroupItem>
            
            <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-3 fs-4 text-muted" />
              <FaFileLines className="me-3 fs-4 text-success" />
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <Link href={`/Courses/${cid}/Assignments/${aid}`}
                      className="wd-assignment-link"
                    >
                    <strong className="text-dark">A3</strong>
                    </Link>
                    <div className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> | 
                      <span> Not available until May 20 at 12:00am</span>
                    </div>
                    <div className="text-muted small">
                      <strong>Due</strong> May 27 at 11:59pm | 100 pts
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <IoCheckmarkCircle className="text-success fs-4 me-2" />
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>

      {/* QUIZZES SECTION */}
      <ListGroup className="rounded-0" id="wd-quizzes">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <strong>QUIZZES</strong>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3 text-muted">10% of Total</span>
              <button className="btn btn-outline-secondary btn-sm me-2">+</button>
              <BsThreeDotsVertical />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>

      {/* EXAMS SECTION */}
      <ListGroup className="rounded-0" id="wd-exams">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <strong>EXAMS</strong>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3 text-muted">20% of Total</span>
              <button className="btn btn-outline-secondary btn-sm me-2">+</button>
              <BsThreeDotsVertical />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>

      {/* PROJECT SECTION */}
      <ListGroup className="rounded-0" id="wd-project">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <strong>PROJECT</strong>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3 text-muted">30% of Total</span>
              <button className="btn btn-outline-secondary btn-sm me-2">+</button>
              <BsThreeDotsVertical />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}