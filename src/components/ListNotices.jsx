import { useState } from "react";
import "./ListNotices.scss";

const ListNotices = (props) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");

    const saveTitle = (e) => {
        setTitle(e.target.value);
    };

    const saveAuthor = (e) => {
        setAuthor(e.target.value);
    };

    const saveBody = (e) => {
        setBody(e.target.value);
    };

    const showOptions = (index) => {
        const element =
            document.getElementsByClassName("ListNotices-form")[index];

        if (element.style.display == "flex") {
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
    };

    return (
        <>
            <div className="ListNotices-area">
                <h1>{props.items.title}</h1>
                <h4>Autor: {props.items.author}</h4>
                <p>{props.items.body}</p>
                <div>
                    <button
                        onClick={() => {
                            showOptions(props.index);
                        }}
                        className="ListNotices-btn-edit"
                    >
                        Editar
                    </button>
                    <button
                        className="ListNotices-btn-delete"
                        onClick={() => {
                            // Utilizando a function passada como props
                            props.fcDelNotice(props.index);
                        }}
                    >
                        Deletar
                    </button>
                    <div className="ListNotices-form">
                        <form>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Título"
                                    onChange={saveTitle}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Autor"
                                    onChange={saveAuthor}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Notícia"
                                    onChange={saveBody}
                                />
                            </div>
                            <div>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        props.fcEditNotice(
                                            props.index,
                                            title,
                                            author,
                                            body
                                        );
                                    }}
                                    className="ListNotice-btn"
                                >
                                    Alterar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="ListNotices-barr"></div>
                </div>
            </div>
        </>
    );
};

export default ListNotices;
