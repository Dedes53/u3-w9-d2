import ListGroup from 'react-bootstrap/ListGroup';

// componente lista che racchiude tutti i commenti di un libro contenuta in CommentArea.
// Questo componente riceve in props un array di commenti e li mapppa generanto tanti ListGroup.Item quanti sono i commenti nell'array
const CommentsList = (props) => {
    return (
        <ListGroup>
            {props.list.map((comm) =>
                <ListGroup.Item key={comm.elementId}>
                    <p>Cosa ne penso:<br /> {comm.comment}</p>
                    <p>Voto: {comm.rate}/5</p>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}

export default CommentsList;







