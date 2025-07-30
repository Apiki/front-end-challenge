import { Code, Sparkles, TrendingUp } from "lucide-react"

export const HeroComponet = () =>{
    return(
          <><div className="absolute inset-0 bg-gradient-to-r from-yellow-apiki/5 via-transparent to-blue-500/5"></div><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
                    Explore o mundo do
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-apiki to-yellow-300">
                        Desenvolvimento
                    </span>
                </h2>
                <p className="text-zinc-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
                    Artigos atualizados, tutoriais práticos e insights sobre as últimas tendências em tecnologia
                </p>

              
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center">
                    <div className="flex items-center space-x-2">
                        <TrendingUp className="text-green-400 w-5 h-5" />
                        <span className="text-white font-semibold">Conteúdo Atualizado</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Code className="text-orange-apiki w-5 h-5" />
                        <span className="text-white font-semibold">Tutoriais Práticos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Sparkles className="text-yellow-apiki w-5 h-5" />
                        <span className="text-white font-semibold">Insights Exclusivos</span>
                    </div>
                </div>
            </div>
        </div></>
    )
}