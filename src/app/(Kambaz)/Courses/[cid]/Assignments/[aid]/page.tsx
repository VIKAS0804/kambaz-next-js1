import { Form, Row, Col, Button } from 'react-bootstrap';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container-fluid p-3">
      {/* Assignment Name */}
      <div className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control 
          id="wd-name" 
          type="text" 
          defaultValue="A1 - ENV + HTML" 
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <Form.Label htmlFor="wd-description">Description</Form.Label>
        <Form.Control
          as="textarea"
          id="wd-description"
          rows={5}
          defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
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
            defaultValue={100} 
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
            
            <Form.Check 
              type="checkbox" 
              id="wd-text-entry" 
              label="Text Entry" 
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="wd-website-url" 
              label="Website URL" 
              defaultChecked
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="wd-media-recordings" 
              label="Media Recordings" 
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="wd-student-annotation" 
              label="Student Annotation" 
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="wd-file-upload" 
              label="File Uploads" 
            />
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
                    defaultValue="2024-05-13T23:59"
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
                    defaultValue="2024-05-06T12:00"
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
                    defaultValue="2024-05-20T23:59"
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
        <Button variant="light" className="border">
          Cancel
        </Button>
        <Button variant="danger">
          Save
        </Button>
      </div>
    </div>
  );
}