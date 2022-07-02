import { ApikiLogoBg } from "../../assets/ApikiLogoBg";

export function Hero() {
    return (
        <div className="w-full grow relative">
            <div className="bg-hero-bg bg-fixed opacity-30 w-full -z-1 absolute h-full"></div>

            <div className="px-10 sm:px-[100px] flex justify-between item-center h-full">
                <div className="w-full flex items-center lg:w-1/2">
                    <div>
                        <h1 className="text-xl sm:text-4xl font-bold mb-4">
                            Bem vindo ao Apiki Blog,<br/>
                            <span className="text-blue-500">tudo sobre Wordpress está aqui.</span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                            Os conteúdos aqui publicados, em sua maioria, são resultados das experiências dos nossos profissionais com seus desafios do dia-a-dia em desenvolver grandes projetos de WordPress.
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <ApikiLogoBg />
                </div>
            </div>
        </div>
    )
}