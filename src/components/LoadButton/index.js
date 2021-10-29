import './loadbutton.css'

export function LoadButton() {

    function clicked() {
        console.log('cicero')
    }

    return (
        <div className="container load-button">
            <button onClick={clicked}>Carregar mais</button>
        </div>
    )
}