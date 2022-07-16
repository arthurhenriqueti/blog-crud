import "./ListNotices.scss";

const ListNotices = (props) => {
    return (
        <>
            <div className="ListNotices-area">
                <h1>{props.items.title}</h1>
                <h4>Autor: {props.items.author}</h4>
                <p>{props.items.body}</p>
                <div>
                    <button
                        className="ListNotices-btn-delete"
                        onClick={() => {
                            // Utilizando a function passada como props
                            props.fcDelNotice(props.index);
                        }}
                    >
                        Deletar
                    </button>
                    <div className="ListNotices-barr"></div>
                </div>
            </div>
        </>
    );
};

export default ListNotices;
