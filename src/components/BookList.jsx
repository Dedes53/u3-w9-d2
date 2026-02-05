import SingleBook from "./SingleBook";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const BookList = function (props) {

    return (
        <Container className="my-4">
            <Row className="g-4">
                {
                    props.books.map((book) => (
                        <SingleBook
                            key={book.asin}
                            asin={book.asin}
                            img={book.img}
                            title={book.title}
                            category={book.category}
                            price={book.price}
                        />
                    ))
                }

            </Row>
        </Container>
    )
}

export default BookList;