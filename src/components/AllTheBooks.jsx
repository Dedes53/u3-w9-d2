import { Component } from 'react';
import fantasy from '../books/fantasy.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

class AllTheBooks extends Component {
    render() {

        return (

            <Container className="my-4">
                <Row>
                    {fantasy.map((book) => (
                        <Card key={book.asin} style={{ width: '18rem' }} className="col-12 col-md-8 col-lg-6 col mb-3">
                            <Card.Img variant="top" src={book.img} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>€{book.price}</Card.Text>
                                <Card.Text>{book.category}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>

        );

    }
}

export default AllTheBooks;