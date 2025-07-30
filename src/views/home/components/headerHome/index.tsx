
import logo from '../../../../assets/logo.webp';
import { Code, Sparkles } from 'lucide-react';
export const HeaderHomeComponent = () => {
    return (

        <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-900/80 border-b border-zinc-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">

                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="flex items-end justify-start w-full">
                                <img
                                    className="w-[80px] md:w-[100px]"
                                    src={logo}
                                    alt="Logo da Apiki - Empresa de desenvolvimento WordPress"
                                    loading="eager"
                                />
                                <h1 className="text-white text-sm">Blog</h1>


                            </div>

                        </div>
                        <div>

                        </div>
                    </div>


                    <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-apiki/10 to-yellow-apiki/5 border border-yellow-apiki/30 px-3 py-2 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm">
                        <Code className="text-yellow-apiki w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="font-semibold text-white text-xs sm:text-sm">Desenvolvimento</span>
                        <Sparkles className="text-yellow-apiki w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                    </div>
                </div>
            </div>
        </header>

    )
}