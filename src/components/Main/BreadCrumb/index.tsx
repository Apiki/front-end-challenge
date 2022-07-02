import { CaretDoubleRight } from "phosphor-react";
import { Link } from "react-router-dom";

interface Props {
    title: string | null,
    category: string
}

export function Breadcrumb({title, category}: Props) {
    return (
        <div className="mt-2">
            <p className="text-[9px] sm:text-xs flex items-center">
                <Link to="/" className="text-gray-200 hover:text-cyan-500 transition-colors">
                    Início
                </Link>
                <CaretDoubleRight size={12} className="pt-1"/>
                <span className="text-gray-200">
                    {category}
                </span>
                <CaretDoubleRight size={12} className="pt-1"/>
                {title && 
                    <span className="text-zinc-100">
                        {title}
                    </span>
                }
            </p>

            <strong className="text-2xl cursor-pointer">
                {title}
            </strong>
        </div>
    )
}