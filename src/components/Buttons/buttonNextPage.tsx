import { UseAPI } from '../../contexts/apiContext'
import './buttonNextPage.css'
import './mediaqueries.css'
export function ButtonNextPage() {

    const { page, setPage, setLoading } = UseAPI()

    return (
        <div className='container-button-next-page'>
            {<button className="button-next-page" onClick={() => {
                setPage(page + 1)
                setLoading(true)
            }}>Carregar mais conteúdo</button>}
        </div>
    )
}
