import { useState } from "react";
import "./ListNotices.scss";

const ListNotices = (props) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");

    const saveTitle = (e) => {
        setTitle(e.target.value);
    };

    const saveAuthor = (e) => {
        setAuthor(e.target.value);
    };

    const saveBody = (e) => {
        setBody(e.target.value);
    };

    const saveImage = (e) => {
        setImage(e.target.value);
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
            <article className="ListNotices-area">
                <div className="ListNotices-img">
                    <figure>
                        <img src={props.items.image} alt={props.items.title} />
                        <figcaption>
                            <span>Imagem: {props.items.title}</span>
                        </figcaption>
                    </figure>
                </div>
                <div className="ListNotices-txt">
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
                            <span className="material-symbols-outlined">
                                edit
                            </span>
                        </button>
                        <button
                            className="ListNotices-btn-delete"
                            onClick={() => {
                                props.fcDelNotice(props.index);
                            }}
                        >
                            <span className="material-symbols-outlined">
                                delete
                            </span>
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
                                    <input
                                        type="url"
                                        placeholder="URL da imagem"
                                        onChange={saveImage}
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
                                                body,
                                                image
                                            );
                                        }}
                                        className="ListNotice-btn"
                                    >
                                        <span className="material-symbols-outlined">
                                            done
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </article>
            <div className="ListNotices-barr"></div>
        </>
    );
};

export default ListNotices;
