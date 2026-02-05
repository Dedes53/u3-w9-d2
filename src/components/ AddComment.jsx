import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const fetchURL = `https://striveschool-api.herokuapp.com/api/comments/`;

const initialComment = {
    comment: "",
    rate: "1",
    elementId: "" //asin del libro a cui si riferisce il commento
};

// Tramite AddComment dobbiamo fare in modo che l'utente possa inserire un commento e una valutazione (rate) e poi, al submit del form, dobbiamo fare una POST al nostro endpoint per salvare il commento.
class AddComment extends Component {

    state = {
        newComment: initialComment
    }

    addComment() {

        //chiamata POST per inviare un nuovo commento
        fetch(fetchURL, {
            method: "POST",
            body: JSON.stringify(this.state.newComment),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q0Njg1ZTNiMTAwMTViNWVkOTAiLCJpYXQiOjE3NzAzMDMyOTYsImV4cCI6MTc3MTUxMjg5Nn0.J_uMfQej1JyBhgkd_AVpMD9K7vyOqzIbX-ddI3JhOLc"
            }
        })
            .then((res) => {
                if (res.ok) {
                    alert("Commento aggiunto con successo!");
                    this.setState({
                        newComment: initialComment
                    });
                    return res.json();
                } else {
                    throw new Error("Errore nell'aggiunta del commento");
                }
            })
            .then((data) => {
                console.log("Commento aggiunto:", data);
                // Dopo aver aggiunto il commento, chiamiamo la funzione passata da CommentArea per aggiornare la lista dei commenti
                this.props.refreshComments();
            })
            .catch((err) => console.log(err));

    }


    render() {
        return (
            <Form onSubmit={(e) => {
                e.preventDefault();
                this.addComment();
            }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Lascia un commento</Form.Label>
                    <Form.Control as="textarea" rows={5}
                        value={this.state.comment}
                        onChange={(e) => {
                            this.setState({
                                newComment: {
                                    ...this.state.newComment,
                                    comment: e.target.value,
                                    elementId: this.props.asin
                                }
                            })
                        }}
                    />
                    <Form.Label>Voto:</Form.Label>
                    <Form.Select
                        value={this.state.newComment.rate}
                        onChange={(e) => {
                            this.setState({
                                newComment: {
                                    ...this.state.newComment,
                                    rate: e.target.value
                                }
                            })
                        }}
                        aria-label="Number of people selection" required>
                        <option>Seleziona il numero di persone</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form >
        )
    }
}

export default AddComment;







