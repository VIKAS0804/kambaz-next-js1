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
                <CardImg variant="top" src="https://www.designgurus.io/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Fdesigngurus-prod.appspot.com%2Fo%2Farticle%252F68091263fad0e4ab527553c5%252Fimg%3A6f4442-6004-3fe-c4ab-6f643a7301a.jpg%3Fgeneration%3D1745510097916734%26alt%3Dmedia&w=1920&q=75&dpl=dpl_5EoYPHoTV7Fumw1RynfV1f6MDNri" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
                <CardBody className="d-flex flex-column">
                  <CardTitle className="wd-dashboard-course-title" style={{ fontSize: "1rem", minHeight: "50px", display: "flex", alignItems: "center" }}>
                    CS 7800 Distributed Scalable Systems
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description flex-grow-1" style={{ fontSize: "0.9rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Learning Distributed systems concepts and scalability
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
                <CardImg variant="top" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*UtaFiHKifClmJ_z2rB9fXA.jpeg" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
                <CardBody className="d-flex flex-column">
                  <CardTitle className="wd-dashboard-course-title" style={{ fontSize: "1rem", minHeight: "50px", display: "flex", alignItems: "center" }}>
                    CS5800 Algorithms
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description flex-grow-1" style={{ fontSize: "0.9rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Algorithms design and analysis
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
                <CardImg variant="top" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
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
              <Link href="/Courses/1237/Home" className="wd-dashboard-course-link text-decoration-none text-dark h-100 d-flex flex-column">
                <CardImg variant="top" src="https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2023/03/types-of-machine-learning-768x511.jpg.webp" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
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
                <CardImg variant="top" src="https://media.licdn.com/dms/image/v2/D5612AQE4aOimenblxw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1710407600740?e=2147483647&v=beta&t=dxH2Zay53Ctvw9bDLIqXLLGP__mPA9YevVUmNgktw9E" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
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
                <CardImg variant="top" src="https://www.mouser.com/blog/Portals/11/Dongang_Machine%20Learning_Theme%20Image-min_1.jpg" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
                <CardBody className="d-flex flex-column">
                  <CardTitle className="wd-dashboard-course-title" style={{ fontSize: "1rem", minHeight: "50px", display: "flex", alignItems: "center" }}>
                    CS7410 Deep Learning
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description flex-grow-1" style={{ fontSize: "0.9rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Dive into deep neural networks and applications
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
                <CardImg variant="top" src="https://platinumdatarecovery.com/wp-content/uploads/2023/05/cloud-computing-diagram.webp" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
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
                <CardImg variant="top" src="https://djitz.com/wp-content/uploads/PDP_textbook.jpg" style={{ height: "160px", objectFit: "cover", flexShrink: 0 }} />
                <CardBody className="d-flex flex-column">
                  <CardTitle className="wd-dashboard-course-title" style={{ fontSize: "1rem", minHeight: "50px", display: "flex", alignItems: "center" }}>
                    CS5010 Programming Design Paradigm
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description flex-grow-1" style={{ fontSize: "0.9rem", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                    Programming concepts and problem solving 
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