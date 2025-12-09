"use client";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import { addEnrollment } from "../Enrollments/reducer";
import { useState, useEffect } from "react";
import { RootState, Course } from "../types";
import { v4 as uuidv4 } from "uuid";
import * as client from "../Courses/client";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  
  const initialCourseState: Course = {
    _id: "",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "New Department",
    credits: 4,
    description: "New Description",
    image: "/images/reactjs.jpg"
  };

  const [course, setCourse] = useState<Course>(initialCourseState);

  useEffect(() => {
    const fetchCourses = async () => {
      if (!currentUser) {
        return;
      }
      try {
        const courses = await client.findMyCourses();
        dispatch(setCourses(courses));
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [currentUser, dispatch]);

  const addNewCourseHandler = async () => {
    if (!currentUser?._id) {
      return;
    }
    
    try {
      const createdCourse = await client.createCourse(course);
      
      // Dispatch addNewCourse action with the created course
      dispatch(addNewCourse(createdCourse));
      
      // Create enrollment for the current user
      const newEnrollment: Enrollment = {
        _id: `E${Date.now()}`,
        user: currentUser._id,
        course: createdCourse._id,
      };
      
      dispatch(addEnrollment(newEnrollment));
      
      // Reset the course form to initial values
      setCourse(initialCourseState);
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const deleteCourseHandler = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      dispatch(deleteCourse(courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const updateCourseHandler = async () => {
    try {
      await client.updateCourse(course);
      dispatch(updateCourse(course));
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      
      <h5>
        New Course
        <Button 
          className="btn btn-primary float-end"
          onClick={addNewCourseHandler}
          id="wd-add-new-course-click"
        >
          Add
        </Button>
        <Button 
          className="btn btn-warning float-end me-2"
          onClick={updateCourseHandler}
          id="wd-update-course-click"
        >
          Update
        </Button>
      </h5>
      
      <FormControl 
        value={course.name} 
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl 
        value={course.description} 
        as="textarea"
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: Course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link 
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg 
                    src="/images/reactjs.jpg" 
                    variant="top" 
                    width="100%" 
                    height={160} 
                  />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText 
                      className="wd-dashboard-course-description overflow-hidden" 
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                  </CardBody>
                </Link>
                
                <CardBody>
                  <Button 
                    onClick={(e) => {
                      e.preventDefault();
                      deleteCourseHandler(course._id);
                    }}
                    className="btn btn-danger float-end"
                    id="wd-delete-course-click"
                  >
                    Delete
                  </Button>
                  <Button 
                    onClick={(e) => {
                      e.preventDefault();
                      setCourse(course);
                    }}
                    className="btn btn-warning float-end me-2"
                    id="wd-edit-course-click"
                  >
                    Edit
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}