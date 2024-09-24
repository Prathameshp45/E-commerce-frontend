import React from "react";
import { Carousel, Row, Col, Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <Container fluid className="p-0">
      {/* Carousel Section */}
      <Carousel controls={false} interval={1500} indicators={false}>
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2016/11/29/03/53/woman-1867431_1280.jpg"
              alt="Fashion Slide"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <div className="carousel-caption">
              <h3>Elegance in Every Style</h3>
              <p>Discover the latest trends in fashion</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2016/11/29/02/27/fashion-1866579_1280.jpg"
              alt="Style Slide"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <div className="carousel-caption">
              <h3>Bold, Unique, and Timeless</h3>
              <p>Stand out with exclusive designs</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2016/11/29/03/51/woman-1867428_1280.jpg"
              alt="Trendy Slide"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <div className="carousel-caption">
              <h3>Unleash Your Inner Fashionista</h3>
              <p>Explore your style, redefine yourself</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Information Section */}
      <Container fluid className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Row className="text-center py-4">
          <Col md={6} className="d-flex justify-content-center">
            <img
              src="https://img.freepik.com/free-photo/clothing-store-interior_23-2148933121.jpg"
              alt="Shop Interior"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h2>Discover Our Collection</h2>
            <p>
              From casual wear to evening dresses, our collection is designed to
              suit every occasion. Explore our latest arrivals and redefine your
              wardrobe today.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Featured Products Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5">Featured Products</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2017/08/06/08/36/fashion-2596791_1280.jpg"
              />
              <Card.Body>
                <Card.Title>Classic Evening Gown</Card.Title>
                <Card.Text>
                  Elegant evening gown that blends sophistication with timeless
                  style.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2016/04/13/20/47/casual-1329344_1280.jpg"
              />
              <Card.Body>
                <Card.Title>Stylish Casual Jacket</Card.Title>
                <Card.Text>
                  Trendy yet comfortable, perfect for daily outings and
                  adventures.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2015/05/30/19/55/suit-791688_1280.jpg"
              />
              <Card.Body>
                <Card.Title>Tailored Business Suit</Card.Title>
                <Card.Text>
                  Sharp, professional look for business meetings or formal
                  events.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <style jsx="true">{`
        .carousel-image {
          position: relative;
        }

        .carousel-caption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          text-align: center;
        }

        .carousel-caption h3 {
          font-size: 2.5rem;
          text-transform: uppercase;
        }

        .carousel-caption p {
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .carousel-caption h3 {
            font-size: 1.8rem;
          }

          .carousel-caption p {
            font-size: 1rem;
          }
        }
      `}</style>
    </Container>
  );
};

export default Home;
