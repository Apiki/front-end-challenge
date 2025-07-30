import { Link } from "react-router-dom"
import type { HeaderPostComponentProps } from "./type"
import { ArrowLeft } from "lucide-react"

export const HeaderPostComponet = (props: HeaderPostComponentProps) => {
    return (
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
            <img
                src={props.featuredImage}
                alt={'imagem do post'}
                className="w-full h-full object-cover"

            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent"></div>


            <Link
                to="/"
                className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/50 transition-all duration-300 group"
                aria-label="Voltar para página inicial"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
        </div>
    )
}