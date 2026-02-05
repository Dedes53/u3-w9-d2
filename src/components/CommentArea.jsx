import CommentsList from "./CommentsList";

class CommentArea extends Comment {
    state = {

    }


    render() {
        return (
            // come primo componente gli diamo commentsList, che genera la lista di commenti. this.state.comments corrisponde ad un array che il componente dovrà ciclare
            <CommentsList list={this.state.comments} />
        )

    }

}

export default CommentArea;