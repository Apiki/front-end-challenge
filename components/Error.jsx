import Router from 'next/router';

export const Error = () => {
    return (
        <div className="error">
            <h2 className="post-title">Ops, Tivemos um Problema!</h2>
            <button className="btn btn-primary" onClick={() => Router.reload(window.location.pathname)}>Recarregar Página</button>
        </div>
    )
}