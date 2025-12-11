"use client";

import { useParams, useRouter } from "next/navigation";
import { Form, Row, Col, Button, Alert, Spinner } from 'react-bootstrap';
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";
import * as client from "../../../client";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  course: string;
  due: string;
  available: string;
  availableUntil?: string;
  dueDate?: string;
  availableDate?: string;
  points: number;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  
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
    const existingAssignment = assignments.find((a) => a._id === aid);
    if (existingAssignment) {
      const { _id, ...assignmentWithoutId } = existingAssignment;
      return assignmentWithoutId;
    }
    return {
      title: "",
      description: "",
      course: cid as string,
      due: "",
      available: "",
      points: 100,
    };
  });

  const [loading, setLoading] = useState(aid !== "new");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log("=== ASSIGNMENT EDITOR LOADED ===");
  console.log("Course ID (cid):", cid);
  console.log("Assignment ID (aid):", aid);
  console.log("Initial assignment state:", assignment);

  // Helper function to convert ISO date to datetime-local format
  const convertISOToDatetimeLocal = (isoString: string | undefined): string => {
    if (!isoString) return "";
    // Remove the Z and milliseconds, keep only YYYY-MM-DDTHH:MM
    return isoString.slice(0, 16);
  };

  useEffect(() => {
    const fetchAssignment = async () => {
      if (aid === "new") {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const courseAssignments = await client.findAssignmentsForCourse(cid as string);
        const fetchedAssignment = courseAssignments.find((a: Assignment) => a._id === aid);
        if (fetchedAssignment) {
          console.log("=== FETCHED ASSIGNMENT FROM API ===");
          console.log("Fetched assignment:", fetchedAssignment);
          
          const { _id, ...assignmentWithoutId } = fetchedAssignment;
          // Convert ISO dates to datetime-local format for form inputs
          const convertedAssignment = {
            ...assignmentWithoutId,
            due: assignmentWithoutId.dueDate ? convertISOToDatetimeLocal(assignmentWithoutId.dueDate) : (assignmentWithoutId.due || ""),
            available: assignmentWithoutId.availableDate ? convertISOToDatetimeLocal(assignmentWithoutId.availableDate) : (assignmentWithoutId.available || ""),
            availableUntil: assignmentWithoutId.availableUntil ? convertISOToDatetimeLocal(assignmentWithoutId.availableUntil) : "",
          };
          
          console.log("After conversion:", convertedAssignment);
          setAssignment(convertedAssignment);
        }
      } catch (error) {
        console.error("Error fetching assignment:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignment();
  }, [aid, cid]);

  const handleSave = async () => {
    console.log("=== SAVE BUTTON CLICKED ===");
    console.log("Current assignment state:", assignment);
    console.log("Assignment to save (before conversion):", assignment);
    
    setSaving(true);
    setError(null);
    try {
      // Convert dates to ISO format and handle empty strings
      const assignmentToSave = {
        ...assignment,
        // Map due to dueDate (convert datetime-local to ISO)
        dueDate: assignment.due ? new Date(assignment.due).toISOString() : undefined,
        // Map available to availableDate (convert datetime-local to ISO)
        availableDate: assignment.available ? new Date(assignment.available).toISOString() : undefined,
        // Convert availableUntil to ISO format
        availableUntil: assignment.availableUntil ? new Date(assignment.availableUntil).toISOString() : undefined,
        // Keep legacy fields for backward compatibility
        due: assignment.due || undefined,
        available: assignment.available || undefined,
      };

      console.log("=== AFTER DATE CONVERSION ===");
      console.log("Assignment to save (after conversion):", assignmentToSave);
      console.log("Is new assignment:", aid === "new");

      if (aid === "new") {
        const createdAssignment = await client.createAssignmentForCourse(cid as string, assignmentToSave);
        console.log("=== API CALL SUCCESS ===");
        console.log("Created/Updated assignment:", createdAssignment);
        console.log("About to redirect to:", `/Courses/${cid}/Assignments`);
        dispatch(addAssignment(createdAssignment));
      } else {
        const assignmentWithId = { ...assignmentToSave, _id: aid as string };
        const updatedAssignment = await client.updateAssignment(assignmentWithId);
        console.log("=== API CALL SUCCESS ===");
        console.log("Created/Updated assignment:", updatedAssignment);
        console.log("About to redirect to:", `/Courses/${cid}/Assignments`);
        dispatch(updateAssignment(updatedAssignment));
      }
      router.push(`/Courses/${cid}/Assignments`);
    } catch (error: any) {
      console.log("=== API CALL FAILED ===");
      console.log("Error:", error);
      console.log("Error response:", error?.response);
      const errorMessage = error?.response?.data?.message || error?.message || "Failed to save assignment. Please try again.";
      setError(errorMessage);
      console.error("Error saving assignment:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (aid !== "new") {
    const existingAssignment = assignments.find((a) => a._id === aid);
    if (!existingAssignment && !loading) {
      return <div className="p-4">Assignment not found</div>;
    }
  }

  return (
    <div id="wd-assignments-editor" className="container-fluid p-3">
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)} className="mb-3">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
        </Alert>
      )}
      
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
                    value={assignment.due || ""}
                    onChange={(e) => setAssignment({ 
                      ...assignment, 
                      due: e.target.value
                    })}
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
                    value={assignment.available || ""}
                    onChange={(e) => setAssignment({ 
                      ...assignment, 
                      available: e.target.value
                    })}
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
                    value={assignment.availableUntil || ""}
                    onChange={(e) => setAssignment({ 
                      ...assignment, 
                      availableUntil: e.target.value || undefined
                    })}
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
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? (
            <>
              <Spinner animation="border" size="sm" className="me-2" />
              Saving...
            </>
          ) : (
            "Save"
          )}
        </Button>
      </div>
    </div>
  );
}