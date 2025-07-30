import { Card, CardContent } from "@/components/ui/card";

import {ArrowLeft,} from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../../../../assets/logo.webp';

export const PostFooterComponent = ({ }) => {



  return (
    <div className="space-y-8">


      <Card className="bg-gradient-to-r from-yellow-apiki/5 to-transparent border border-yellow-apiki/20">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-yellow-apiki hover:text-yellow-apiki/80 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o blog
            </Link>

            <div className="text-center text-zinc-400 text-sm">
              <p>Gostou do conteúdo? Explore mais artigos no
                <Link to="/" className="text-yellow-apiki hover:underline ml-1">
                  Blog Apiki
                </Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <footer className="text-center py-8 border-t border-zinc-700/50">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <img
              src={logo}
              alt="Logo Apiki"
              className="w-24 h-8 rounded"
            />
            <span className="text-white font-semibold">Blog Apiki</span>
          </div>

          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            Conteúdo de qualidade sobre desenvolvimento WordPress, tecnologia e inovação para a comunidade brasileira.
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-zinc-500">
            <span>© 2025 Apiki</span>
            <span>•</span>
            <a href="https://apiki.com" className="hover:text-yellow-apiki transition-colors">
              apiki.com
            </a>
            <span>•</span>
            <span>Feito com ❤️</span>
          </div>
        </div>
      </footer>
    </div>
  );
};