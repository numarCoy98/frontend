import { useState } from "react"
import { Message } from "./components/Message"

const messages = [
    {
        "_id": "64437abbfc2248b3b03294a4",
        "message": "Hola a todos",
        "date": "1970-01-01T00:00:00.000Z",
        "user_id": {
            "_id": "6443585153478acc5bce2a8e",
            "name": "Numar coy",
            "role": "moderator"
        },
        "__v": 0
    },
    {
        "_id": "64437b9df35bdac9c6c7d838",
        "message": "Hola a todos",
        "date": "1970-01-01T00:00:00.000Z",
        "user_id": {
            "_id": "6443585153478acc5bce2a8e",
            "name": "Numar coy",
            "role": "moderator"
        },
        "__v": 0
    },
    {
        "_id": "64437bd2f37e22580a357c8c",
        "message": "Hola a todos",
        "date": "1970-01-01T00:00:00.000Z",
        "user_id": {
            "_id": "6443585153478acc5bce2a8e",
            "name": "Numar coy",
            "role": "moderator"
        },
        "__v": 0
    },
    {
        "_id": "64437c165594132e59722f14",
        "message": "Hola a todos",
        "date": "1970-01-01T00:00:00.000Z",
        "user_id": {
            "_id": "6443585153478acc5bce2a8e",
            "name": "Numar coy",
            "role": "moderator"
        },
        "__v": 0
    },
    {
        "_id": "644405f3285a830543a13e74",
        "user_id": {
            "_id": "644404af0ea32102156eebbb",
            "name": "Anlly coy",
            "role": "student"
        },
        "message": "Hola, cómo estas?",
        "date": "1970-01-01T00:00:00.034Z",
        "__v": 0
    },
    {
        "_id": "644406409f0036fa7fe21d17",
        "user_id": {
            "_id": "644404af0ea32102156eebbb",
            "name": "Anlly coy",
            "role": "student"
        },
        "message": "qué estan haciendo?",
        "date": "1970-01-01T00:00:00.034Z",
        "__v": 0
    },
    {
        "_id": "6444064e9f0036fa7fe21d19",
        "user_id": {
            "_id": "644404af0ea32102156eebbb",
            "name": "Anlly coy",
            "role": "student"
        },
        "message": "Los amo",
        "date": "1970-01-01T00:00:00.036Z",
        "__v": 0
    }
]

export const StreamApp = () => {
    const userUid = "6443585153478acc5bce2a8e"
    messages.sort((a, b) => new Date(a.date) - new Date(b.date))

    const [newMessage, setMessage] = useState('')

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <iframe width="100%" height="500"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
                        </iframe>
                    </div>
                    <div className='col-4'>
                        <section style={{ backgroundColor: '#eee' }}>
                            <div className="row d-flex justify-content-center">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between align-items-center p-3">
                                        <h5 className="mb-0">Chat messages</h5>
                                        <div className="d-flex flex-row align-items-center">
                                            <span className="badge bg-warning me-3">{messages.length}</span>
                                            <i className="fas fa-minus me-3 text-muted fa-xs" />
                                            <i className="fas fa-comments me-3 text-muted fa-xs" />
                                            <i className="fas fa-times text-muted fa-xs" />
                                        </div>
                                    </div>
                                    <div className="card-body overflow-auto" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
                                        {messages.map(({ _id: idMessage, date, message, user_id: { name, role, _id } }) =>
                                            <Message
                                                key={idMessage}
                                                date={date}
                                                message={message}
                                                name={name}
                                                role={role}
                                                isOwned={_id === userUid}
                                            />)}
                                    </div>
                                    <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                                        <div className="input-group mb-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Participa"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                                value={newMessage}
                                                onChange={({ target: { value } }) => setMessage(value)}
                                            />
                                            <button className="btn btn-primary" type="button" id="button-addon2" style={{ paddingTop: '.55rem' }}>
                                                Enviar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
