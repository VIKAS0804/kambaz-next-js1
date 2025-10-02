import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{ marginLeft: "20px", padding: "20px" }}>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2>
      <hr />
      <div id="wd-dashboard-courses" style={{ marginTop: "30px" }}>
        <Row className="g-4">
          <Col xl={3} lg={4} md={6} sm={12} className="wd-dashboard-course d-flex">
            <Card style={{ width: "300px", height: "400px" }}>
              <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/reactjs.jpg" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
                <CardBody className="d-flex flex-column">
                  <CardTitle className="wd-dashboard-course-title" style={{ fontSize: "1rem", minHeight: "50px", display: "flex", alignItems: "center" }}>
                    CS1234 React JS
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description flex-grow-1" style={{ fontSize: "0.9rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Full Stack software developer
                  </CardText>
                  <div className="mt-auto">
                    <Button variant="primary">Go</Button>
                  </div>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xl={3} lg={4} md={6} sm={12} className="wd-dashboard-course d-flex">
            <Card style={{ width: "300px", height: "400px" }}>
              <Link href="/Courses/1235/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/webdev.jpg" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
                <CardBody className="d-flex flex-column">
                  <CardTitle className="wd-dashboard-course-title" style={{ fontSize: "1rem", minHeight: "50px", display: "flex", alignItems: "center" }}>
                    CS5610 Web Development
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description flex-grow-1" style={{ fontSize: "0.9rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Full stack web developer
                  </CardText>
                  <div className="mt-auto">
                    <Button variant="primary">Go</Button>
                  </div>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xl={3} lg={4} md={6} sm={12} className="wd-dashboard-course d-flex">
            <Card style={{ width: "300px", height: "400px" }}>
              <Link href="/Courses/1236/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/dsa.jpg" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
                <CardBody className="d-flex flex-column">
                  <CardTitle className="wd-dashboard-course-title" style={{ fontSize: "1rem", minHeight: "50px", display: "flex", alignItems: "center" }}>
                    CS3843 Data Structures and Algorithms
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description flex-grow-1" style={{ fontSize: "0.9rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Learn about data structures and algorithms
                  </CardText>
                  <div className="mt-auto">
                    <Button variant="primary">Go</Button>
                  </div>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xl={3} lg={4} md={6} sm={12} className="wd-dashboard-course d-flex">
            <Card style={{ width: "300px", height: "400px" }}>
              <Link href="/Courses/1237/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/machinelearning.jpg" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
                <CardBody className="d-flex flex-column">
                  <CardTitle className="wd-dashboard-course-title" style={{ fontSize: "1rem", minHeight: "50px", display: "flex", alignItems: "center" }}>
                    CS4700 Machine Learning
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description flex-grow-1" style={{ fontSize: "0.9rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Introduction to ML and AI fundamentals
                  </CardText>
                  <div className="mt-auto">
                    <Button variant="primary">Go</Button>
                  </div>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xl={3} lg={4} md={6} sm={12} className="wd-dashboard-course d-flex">
            <Card style={{ width: "300px", height: "400px" }}>
              <Link href="/Courses/1238/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/databases.jpg" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
                <CardBody className="d-flex flex-column">
                  <CardTitle className="wd-dashboard-course-title" style={{ fontSize: "1rem", minHeight: "50px", display: "flex", alignItems: "center" }}>
                    CS3200 Database Systems
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description flex-grow-1" style={{ fontSize: "0.9rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Learn relational and NoSQL database systems
                  </CardText>
                  <div className="mt-auto">
                    <Button variant="primary">Go</Button>
                  </div>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xl={3} lg={4} md={6} sm={12} className="wd-dashboard-course d-flex">
            <Card style={{ width: "300px", height: "400px" }}>
              <Link href="/Courses/1239/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/cybersecurity.jpg" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
                <CardBody className="d-flex flex-column">
                  <CardTitle className="wd-dashboard-course-title" style={{ fontSize: "1rem", minHeight: "50px", display: "flex", alignItems: "center" }}>
                    CS3500 Cybersecurity
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description flex-grow-1" style={{ fontSize: "0.9rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Security principles and ethical hacking
                  </CardText>
                  <div className="mt-auto">
                    <Button variant="primary">Go</Button>
                  </div>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xl={3} lg={4} md={6} sm={12} className="wd-dashboard-course d-flex">
            <Card style={{ width: "300px", height: "400px" }}>
              <Link href="/Courses/1240/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/cloudcomputing.jpg" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
                <CardBody className="d-flex flex-column">
                  <CardTitle className="wd-dashboard-course-title" style={{ fontSize: "1rem", minHeight: "50px", display: "flex", alignItems: "center" }}>
                    CS4200 Cloud Computing
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description flex-grow-1" style={{ fontSize: "0.9rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Explore cloud infrastructure and services
                  </CardText>
                  <div className="mt-auto">
                    <Button variant="primary">Go</Button>
                  </div>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col xl={3} lg={4} md={6} sm={12} className="wd-dashboard-course d-flex">
            <Card style={{ width: "300px", height: "400px" }}>
              <Link href="/Courses/1241/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="/images/ai.jpg" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
                <CardBody className="d-flex flex-column">
                  <CardTitle className="wd-dashboard-course-title" style={{ fontSize: "1rem", minHeight: "50px", display: "flex", alignItems: "center" }}>
                    CS4100 Artificial Intelligence
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description flex-grow-1" style={{ fontSize: "0.9rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Explore neural networks, search, and reasoning
                  </CardText>
                  <div className="mt-auto">
                    <Button variant="primary">Go</Button>
                  </div>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}