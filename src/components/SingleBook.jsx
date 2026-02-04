import { Component } from "react";

class SingleBook extends Component {
    render(props) {

        return (
            <Col xs={12} md={6} lg={4} xl={3} key={props.asin}>
                <Card className="mb-3" >
                    <Card.Img variant="top" src={props.img} className="object-fit-cover" />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <Card.Text className="m-0">{props.category}</Card.Text>
                            <Card.Text>€{props.price}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )

    }
};

export default SingleBook;