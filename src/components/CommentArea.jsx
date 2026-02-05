import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./ AddComment";


const fetchURL = `https://striveschool-api.herokuapp.com/api/comments/`;
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q0Njg1ZTNiMTAwMTViNWVkOTAiLCJpYXQiOjE3NzAzMDMyOTYsImV4cCI6MTc3MTUxMjg5Nn0.J_uMfQej1JyBhgkd_AVpMD9K7vyOqzIbX-ddI3JhOLc"


// CommentArea deve mostrare deve passare a CommentsList l'array di commenti da mostrare e deve mostrare AddComment per permettere di aggiungere un commento
class CommentArea extends Component {
    // single book passa a CommentArea l'asin del libro selezionato tramite props. Quindi per ottenere i commenti di quel libro dovrò fare una fetch a questo://striveschool-api.herokuapp.com/api/comments/ + this.props.asin  

    state = {
        comments: []

    }

    getComments = () => {
        // console.log("Props ricevute in CommentArea:", this.props);
        // console.log("ASIN ricevuto:", this.props.asin);

        //controllo di sicurezza
        // if (!this.props.asin) {
        //     console.error("ASIN è undefined! Non posso fare la fetch");
        //     return;
        // }

        console.log("URL che sto chiamando:", fetchURL + this.props.asin);

        fetch(fetchURL + this.props.asin, {
            headers: {
                Authorization: "Bearer " + key
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Errore nel recupero dei commenti");
                }
            })
            .then((data) => {
                console.log("Commenti:", data);
                this.setState({ comments: data });
            })
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        console.log("CommentArea montato con props:", this.props);
        this.getComments();
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.asin !== this.props.asin) {
    //         this.getComments();
    //     }
    // }



    render() {
        return (
            <>
                {/* come primo componente gli diamo commentsList, che genera la lista di commenti. this.state.comments corrisponde ad un array che il componente dovrà ciclare */}
                <CommentsList list={this.state.comments} />
                {/* come secondo componente gli diamo AddComment, che contiene il form per aggiungere un commento */}
                <AddComment
                    asin={this.props.asin}  // ✅ Passa l'asin
                    refreshComments={this.getComments}  // ✅ Per aggiornare la lista
                />
            </>
        )

    }

}

export default CommentArea;