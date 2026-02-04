import { Component } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";

class SingleBook extends Component {

    state = {
        seleced: false
    }

    render() {
        // in una class le props non si possono passare, quindi bisogna usare this.props.esempio
        // altriementi si può utilizzare il destructuring all'inizio di render()
        //ES: const { img, title, category, price } = this.props;
        //a questo punto nel mio codice posso usare direttamente img, title, category, price senza this.props tra {} 


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