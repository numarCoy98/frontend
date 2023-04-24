import { useContext, useEffect, useState } from "react"
import chatApi from "../../../api/chatApi"
import { AuthContext } from "../../auth"
import { useAxios } from "../../hooks"
import { Message } from "./components/Message"

export const StreamApp = () => {

    const [newMessage, setMessage] = useState('')
    // const [{ isLoading, data, hasError }, loadMessage] = useState({
    //     data: {},
    //     isLoading: false,
    //     hasError: null,
    // })
    const { authState: { user: { uid } } } = useContext(AuthContext)

    const { data, isLoading, hasError, } = useAxios('/chat/getMessages')
    const { messages = [] } = data || {}

    const handleAddMessage = async () => {
        const { data } = await chatApi.post('/chat/addMessage', { user_id: uid, message: newMessage, date: new Date().getTime() })
        setMessage('')
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <iframe width="100%" height="500"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
                        </iframe>
                    </div>
                    {isLoading ? (
                        <div className="alert alert-info text-center">
                            loading....
                        </div>
                    ) : <div className='col-4'>

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
                                        {messages.length && messages.map(({ _id: idMessage, date, message, user_id: { name, role, _id } }) =>
                                            <Message
                                                key={idMessage}
                                                date={date}
                                                message={message}
                                                name={name}
                                                role={role}
                                                isOwned={_id === uid}
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
                                            <button
                                                onClick={handleAddMessage}
                                                className="btn btn-primary"
                                                type="button"
                                                id="button-addon2" style={{ paddingTop: '.55rem' }}>
                                                Enviar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>}
                </div>
            </div>
        </>
    )
}
