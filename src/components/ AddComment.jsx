import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddComment extends Component {
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form >
        )
    }
}

export default AddComment;







