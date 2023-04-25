import { useContext, useEffect, useLayoutEffect, useState } from "react"
import chatApi from "../../../api/chatApi"
import { getEnvVariables } from "../../../helpers/getEnvVariables"
import { AuthContext } from "../../auth"
// import { useAxios } from "../../hooks"
import { Message } from "./components/Message"
import { useRef } from 'react';

import { io } from "socket.io-client";
const { SOCKET_API } = getEnvVariables()

const socket = io('http://localhost:5000')



export const StreamApp = () => {
    const [newMessage, setMessage] = useState('')
    // const [isNewMessage, setIsNewMessage] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [messages, loadMessages] = useState([])

    const myRef = useRef(null);

    const fetchData = async () => {
        // setIsLoading(true);
        const { data: { messages } } = await chatApi.get('/chat/getMessages');
        loadMessages(messages.sort((a, b) => a.date - b.date));
        // setIsLoading(false);
    }

    const { authState: { user: { uid } } } = useContext(AuthContext)

    const handleAddMessage = async (e) => {
        e.preventDefault();
        const { data } = await chatApi.post('/chat/addMessage', { user_id: uid, message: newMessage, date: new Date().getTime() })
        if (data.ok) {
            socket.emit('newMessage', { user_id: uid, message: newMessage, date: new Date().getTime() })
            fetchData()
        }
        setMessage('')
    }

    const scrollToBottom = () => {
        myRef.current?.scrollIntoView({ behavior: "smooth", block: 'end' })
    }

    useEffect(() => {
        fetchData()
        socket.on('newMessage', () => {
            fetchData()
        })
        return () => {
            socket.off('newMessage', console.log)
        }
    }, [])

    useLayoutEffect(() => {
        scrollToBottom()
    }, [messages])

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
                                    <div className="card-body overflow-auto" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}
                                    >
                                        {/* {isLoading ? (
                                            <div className="alert alert-info text-center">
                                                loading....
                                            </div>
                                        ) : <> */}
                                        {
                                            messages?.length && messages.map(({ _id: idMessage, date, message, user_id: { name, role, _id } }, ix) =>
                                                <Message
                                                    key={idMessage}
                                                    date={date}
                                                    message={message}
                                                    name={name}
                                                    role={role}
                                                    isOwned={_id === uid}
                                                />)
                                        }
                                        {/* </> */}

                                        {/* } */}
                                        <div ref={myRef} style={{ height: '30px', backgroundColor: 'red' }}></div>
                                    </div>
                                    <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                                        {/* <div className="input-group mb-0"> */}
                                        <form onSubmit={handleAddMessage} className="input-group mb-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Participa"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                                value={newMessage}
                                                onChange={({ target: { value } }) => setMessage(value)}
                                            />
                                            <button
                                                // onClick={handleAddMessage}
                                                type="submit"
                                                className="btn btn-primary"
                                                id="button-addon2" style={{ paddingTop: '.55rem' }}>
                                                Enviar
                                            </button>
                                        </form>
                                        {/* </div> */}
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
