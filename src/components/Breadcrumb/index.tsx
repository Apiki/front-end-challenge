import { CaretDoubleRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { BreadCrumber } from "../../interfaces/breadCrumb";
import './breadcrumb.css'
import './mediaqueries.css'

export function BreadCrumb({ home, categoria, postTitle, slug }: BreadCrumber) {

    return (

        <div className="breadcrumb">
            <Link to={'/'}>{home}</Link>
            <CaretDoubleRight size={12} weight='light' />
            <Link to={'/'} >{categoria}</Link>
            {postTitle && <CaretDoubleRight size={12} weight='light' />}
            {postTitle &&
                <Link to={`/${slug}`}>{postTitle}</Link>}
        </div>

    )
}