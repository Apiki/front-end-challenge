import './content.css'
import { Posts } from '../Posts'

export function Content() {

    return (
        <div className="container">

            <section>
                <h1>Desenvolvimento WordPress</h1>
                <p>Desenvolva seu negócio, desenvolvendo com WordPress</p>
            </section>


            <main>
                <h3>Últimas postagens</h3>
                <Posts />
            </main>
        </div>
    )
}