import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Form, InputGroup, Button } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function AssignmentsControls() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center flex-grow-1 me-3">
        <InputGroup style={{ maxWidth: "400px" }}>
          <InputGroupText className="bg-white border-end-0">
            <IoSearch />
          </InputGroupText>
          <Form.Control
            type="text"
            placeholder="Search..."
            className="border-start-0"
          />
        </InputGroup>
      </div>
      
      <div className="d-flex gap-2">
        <Button variant="secondary" size="lg" className="me-1 float-end">
          <FaPlus className="me-1" />
          Group
        </Button>
        <Button variant="danger" size="lg">
          <FaPlus className="me-1" />
          Assignment
        </Button>
      </div>
    </div>
  );
}