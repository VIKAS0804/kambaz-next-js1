"use client";

import { useParams, useRouter } from "next/navigation";
import { Form, Row, Col, Button } from 'react-bootstrap';
import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  course: string;
  due: string;
  available: string;
  points: number;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  
  const existingAssignment = assignments.find((a) => a._id === aid);
  
  const [assignment, setAssignment] = useState<Omit<Assignment, "_id">>(() => {
    if (aid === "new") {
      return {
        title: "",
        description: "",
        course: cid as string,
        due: "",
        available: "",
        points: 100,
      };
    }
    return existingAssignment || {
      title: "",
      description: "",
      course: cid as string,
      due: "",
      available: "",
      points: 100,
    };
  });

  if (aid !== "new" && !existingAssignment) {
    return <div className="p-4">Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container-fluid p-3">
      {/* Assignment Name */}
      <div className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control 
          id="wd-name" 
          type="text" 
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <Form.Label htmlFor="wd-description">Description</Form.Label>
        <Form.Control
          as="textarea"
          id="wd-description"
          rows={5}
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>

      {/* Points */}
      <Row className="mb-3">
        <Form.Label column sm={3} className="text-end">
          Points
        </Form.Label>
        <Col sm={9}>
          <Form.Control 
            id="wd-points" 
            type="number" 
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })}
          />
        </Col>
      </Row>

      {/* Assignment Group */}
      <Row className="mb-3">
        <Form.Label column sm={3} className="text-end">
          Assignment Group
        </Form.Label>
        <Col sm={9}>
          <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECTS">PROJECTS</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Display Grade As */}
      <Row className="mb-3">
        <Form.Label column sm={3} className="text-end">
          Display Grade as
        </Form.Label>
        <Col sm={9}>
          <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Letter Grade">Letter Grade</option>
            <option value="Complete/Incomplete">Complete/Incomplete</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Submission Type */}
      <Row className="mb-3">
        <Form.Label column sm={3} className="text-end align-top">
          Submission Type
        </Form.Label>
        <Col sm={9}>
          <div className="border p-3 rounded">
            <Form.Select id="wd-submission-type" defaultValue="Online" className="mb-3">
              <option value="Online">Online</option>
              <option value="On Paper">On Paper</option>
              <option value="External Tool">External Tool</option>
            </Form.Select>

            <div className="mb-2">
              <strong>Online Entry Options</strong>
            </div>
            
            <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" className="mb-2" />
            <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked className="mb-2" />
            <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" className="mb-2" />
            <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" className="mb-2" />
            <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
          </div>
        </Col>
      </Row>

      {/* Assign */}
      <Row className="mb-3">
        <Form.Label column sm={3} className="text-end align-top">
          Assign
        </Form.Label>
        <Col sm={9}>
          <div className="border p-3 rounded">
            <div className="mb-3">
              <Form.Label htmlFor="wd-assign-to">
                <strong>Assign to</strong>
              </Form.Label>
              <Form.Control 
                id="wd-assign-to" 
                type="text" 
                defaultValue="Everyone"
                className="bg-light"
              />
            </div>

            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <Form.Label htmlFor="wd-due-date">
                    <strong>Due</strong>
                  </Form.Label>
                  <Form.Control 
                    type="datetime-local" 
                    id="wd-due-date" 
                    value={assignment.due}
                    onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <Form.Label htmlFor="wd-available-from">
                    <strong>Available from</strong>
                  </Form.Label>
                  <Form.Control 
                    type="datetime-local" 
                    id="wd-available-from" 
                    value={assignment.available}
                    onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-3">
                  <Form.Label htmlFor="wd-available-until">
                    <strong>Until</strong>
                  </Form.Label>
                  <Form.Control 
                    type="datetime-local" 
                    id="wd-available-until" 
                    value={assignment.due}
                    onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Buttons */}
      <hr />
      <div className="d-flex justify-content-end gap-2">
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="light" className="border">
            Cancel
          </Button>
        </Link>
        <Button 
          variant="danger"
          onClick={() => {
            if (aid === "new") {
              dispatch(addAssignment(assignment));
            } else {
              dispatch(updateAssignment({ ...assignment, _id: aid as string }));
            }
            router.push(`/Courses/${cid}/Assignments`);
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}