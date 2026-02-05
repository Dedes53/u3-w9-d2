import ListGroup from 'react-bootstrap/ListGroup';

// componente lista che racchiude tutti i commenti di un libro contenuta in CommentArea.
// Questo componente riceve in props un array di commenti e li mapppa generanto tanti ListGroup.Item quanti sono i commenti nell'array
const CommentsList = (props) => {
    return (
        <ListGroup>
            {props.list.map((comm) =>
                <ListGroup.Item key={comm.elementId}>
                    <p>{comm.comment}</p>
                    <p>{comm.rate}</p>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}

export default CommentsList;







