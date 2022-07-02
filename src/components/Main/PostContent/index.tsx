import { format } from "date-fns";
import ptBr from 'date-fns/locale/pt-BR'
import parser from "html-react-parser"
import { Breadcrumb } from "../BreadCrumb";
import { Aside } from "./Aside";

export function PostContent({...data}) {
    data = data.data;
    const formatedDate = format(new Date(data.date), "dd' de 'MMMM', 'yyyy", {
        locale: ptBr,
    })

    return (
        <main className="mx-10 md:mx-[100px]">
            <Breadcrumb title={null} category={'Desenvolvimento Wordpress'}/>
            <div className="sm:mx-[15px] my-9 flex flex-col">
                <div className="grid-header w-full mb-9">
                    <div className="flex items-center">
                        <img
                            className="w-full h-auto"
                            src={data.yoast_head_json.og_image[0].url}
                        ></img>
                    </div>
                    <div className="xl:pl-12">
                        <div className="w-full flex justify-between pt-2">   
                            <strong className="text-blue-500 font-normal text-xs sm:text-base">
                                Por {data._embedded.author[0].name}
                            </strong>
                            <span className="text-orange-500 text-xs sm:text-base">
                                {formatedDate}
                            </span>
                        </div>
                        <h1 className="text-xl sm:text-5xl font-bold leading-tight">
                            {data.title.rendered}
                        </h1>
                        <span className="text-3 sm:text-[32px] leading-none text-gray-200">
                            {data.yoast_head_json.description}
                        </span>
                    </div>
                </div>
                <div className="flex">

                    <Aside />

                    <div className="post-rendered bg-white text-gray-900 p-2 sm:p-8">
                        {parser(data.content.rendered)}
                    </div>
                </div>
            </div>
        </main>
    )
}