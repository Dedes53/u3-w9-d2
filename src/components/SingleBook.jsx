import { Component } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";

class SingleBook extends Component {
    render() {

        return (
            <Col xs={12} md={6} lg={4} xl={3} key={this.props.asin}>
                <Card className="mb-3" >
                    <Card.Img variant="top" src={this.props.img} className="object-fit-cover" />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <Card.Text className="m-0">{this.props.category}</Card.Text>
                            <Card.Text>€{this.props.price}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )

    }
};

export default SingleBook;