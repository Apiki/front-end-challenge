import { sectionTitle } from '../../interfaces/sectionTitle'
import './index.css'

export function SectionTitle({ title }: sectionTitle) {
    return (

        <h1 className="section-title">{title}</h1>

    )
}