import CommentsList from "./CommentsList";
import AddComment from "./ AddComment";


class CommentArea extends Comment {
    state = {

    }


    render() {
        return (
            <>
            // come primo componente gli diamo commentsList, che genera la lista di commenti. this.state.comments corrisponde ad un array che il componente dovrà ciclare
                <CommentsList list={this.state.comments} />
            // come secondo componente gli diamo AddComment, che contiene il form per aggiungere un commento
                <AddComment />
            </>
        )

    }

}

export default CommentArea;