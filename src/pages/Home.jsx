import { useState } from "react";
import Header from "../components/Header";
import ListNotices from "../components/ListNotices";
import "./Home.scss";

const Home = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");

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

    const addNotice = (e) => {
        e.preventDefault();
        setNotices([
            ...notices,
            {
                title: title,
                author: author,
                body: body,
            },
        ]);
        alert("Notícia cadastrada com sucesso!");
        hideForm();
        console.log(notices);
    };

    const delNotice = (index) => {
        // Copiando o array
        const newArray = notices.slice();
        // Removendo o elemento do index atual
        newArray.splice(index, 1);
        setNotices(newArray);
        alert("Notícia deletada com sucesso!");
    };

    const editNotice = (index, title, author, body) => {
        // Copiando o array
        const newArray = notices.slice();
        // Removendo o elemento do index atual
        newArray.splice(index, 1, {
            title: title,
            author: author,
            body: body,
        });
        setNotices(newArray);
        alert("Notícia alterada com sucesso!");
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
                                        // Passando a function como props
                                        fcDelNotice={delNotice}
                                        fcEditNotice={editNotice}
                                    />
                                </div>
                            );
                        })
                        .reverse()}
                    <div className="home-btn-area">
                        <button className="home-btn" onClick={showForm}>
                            Cadastrar
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
                        <div className="home-btn-area">
                            <button onClick={addNotice} className="home-btn">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Home;
