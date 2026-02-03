import { Component } from 'react';
import fantasy from '../books/fantasy.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class AllTheBooks extends Component {
    render() {

        return (

            <Container className="my-4">
                <Row className="g-4">
                    {fantasy.map((book) => (
                        <Col xs={12} md={6} lg={4} xl={3} key={book.asin}>
                            <Card className="mb-3" >
                                <Card.Img variant="top" src={book.img} className="object-fit-cover" />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Card.Text className="m-0">{book.category}</Card.Text>
                                        <Card.Text>€{book.price}</Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        );

    }
}

export default AllTheBooks;
