import { useState } from "react";
import Header from "../components/Header";
import ListNotices from "../components/ListNotices";
import "./Home.scss";

const Home = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");

    const [notices, setNotices] = useState([]);

    const showForm = () => {
        const element = document.getElementsByClassName("home-form")[0];

        if (element.style.display == "flex") {
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
    };

    const hideForm = () => {
        const element = document.getElementsByClassName("home-form")[0];
        element.style.display = "none";
    };

    const hideListNoticesForm = (index) => {
        const element =
            document.getElementsByClassName("ListNotices-form")[index];
        element.style.display = "none";
    };

    const addNotice = (e) => {
        e.preventDefault();
        setNotices([
            ...notices,
            {
                title: title,
                author: author,
                body: body,
                image: image,
            },
        ]);
        alert("Notícia cadastrada com sucesso!");
        hideForm();
    };

    const delNotice = (index) => {
        const newArray = notices.slice();
        newArray.splice(index, 1);
        setNotices(newArray);
        alert("Notícia deletada com sucesso!");
    };

    const editNotice = (index, title, author, body, image) => {
        const newArray = notices.slice();
        newArray.splice(index, 1, {
            title: title,
            author: author,
            body: body,
            image: image,
        });
        setNotices(newArray);
        alert("Notícia alterada com sucesso!");
        hideListNoticesForm(index);
    };

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

    return (
        <>
            <Header />
            <main className="home-area">
                <div className="home-list container">
                    <h2>Últimas notícias</h2>
                    {notices
                        .map((element, index) => {
                            return (
                                <div key={index}>
                                    <ListNotices
                                        items={element}
                                        index={index}
                                        fcDelNotice={delNotice}
                                        fcEditNotice={editNotice}
                                    />
                                </div>
                            );
                        })
                        .reverse()}
                    <div className="home-btn-area">
                        <button className="home-btn" onClick={showForm}>
                            <span className="material-symbols-outlined">
                                add
                            </span>
                        </button>
                    </div>
                </div>
                <div className="home-form">
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
                        <div className="home-btn-area">
                            <button onClick={addNotice} className="home-btn">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Home;
