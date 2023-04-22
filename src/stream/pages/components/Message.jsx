
export const Message = ({ name, date, message, isOwned = false, role }) => {

    const roles = { student: "Estudiante", moderator: 'Moderador' }
    return (
        <>
            {
                !isOwned ?
                    (<>
                        <div className="d-flex justify-content-between">
                            <p className="small mb-1">{name}</p>
                            <p className="small mb-1">{roles[role]}</p>
                            <p className="small mb-1 text-muted">{date}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-start">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp" alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                            <div>
                                <p className="small p-2 ms-3 mb-3 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>{message}</p>
                            </div>
                        </div>
                    </>)
                    :
                    (<>
                        <div className="d-flex justify-content-between">
                            <p className="small mb-1 text-muted">{date}</p>
                            <p className="small mb-1">{roles[role]}</p>
                            <p className="small mb-1">{name}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                            <div>
                                <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-primary">{message}</p>
                            </div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp" alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                        </div>
                    </>)
            }
        </>

    )
}
