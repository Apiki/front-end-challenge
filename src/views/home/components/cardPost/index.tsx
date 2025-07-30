import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import type { CardPostProps } from "./type";

export const CardPostComponent = (props: CardPostProps) => {


  return (
    <Card className="h-full bg-transparent border-0 overflow-hidden group">
      <CardHeader className="p-0 relative">
       
        <div className="relative overflow-hidden rounded-t-2xl bg-zinc-800">
          {props.featuredImage ? (
            <img
              src={props.featuredImage}
              alt={props.title || 'Imagem do post'}
              className="w-full h-48 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
              loading={props.index < 6 ? "eager" : "lazy"}
              itemProp="image"
            />
          ) : (
            <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
              <div className="text-zinc-500">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          )}
          
      
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
        
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
             <span>Leitura:</span>
            <Clock className="w-3 h-3" />
            <span>{props.readingTime}</span>
          </div>
        </div>

        <CardTitle className="p-4 pb-2">
          <div className="space-y-3">
         
            <h2
              className="text-white text-lg sm:text-xl font-bold line-clamp-2 leading-tight group-hover:text-yellow-apiki transition-colors duration-300"
              itemProp="headline"
            >
              {props.title}
            </h2>

           
            <div className="flex flex-wrap items-center gap-3 text-xs">
          
              <div className="flex items-center space-x-1 text-yellow-apiki" itemProp="author">
                <User className="w-3 h-3" />
                <span className="font-medium">{props.author || 'Autor'}</span>
              </div>
              
         
              <div className="flex items-center space-x-1 text-zinc-400">
                <Calendar className="w-3 h-3" />
                <time
                  dateTime={props.date.toString()}
                  itemProp="datePublished"
                >
                  {new Date(props.date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </div>
        </CardTitle>
      </CardHeader>

    
      <CardContent className="px-4 pb-2 flex-1">
        <CardDescription
          className="text-zinc-300 text-sm leading-relaxed line-clamp-3"
          itemProp="description"
        >
          {props.description || 'Descubra insights valiosos e conteúdo de qualidade neste artigo. Acesse para saber mais sobre desenvolvimento e tecnologia.'}
        </CardDescription>
      </CardContent>

    
      <CardFooter className="px-4 pb-4">
        <Link
          to={`/post/${props.slug}`}
          className="group/link w-full flex items-center justify-between bg-gradient-to-r from-yellow-apiki/10 to-transparent hover:from-yellow-apiki/20 hover:to-yellow-apiki/5 border border-yellow-apiki/30 hover:border-yellow-apiki/50 rounded-lg px-4 py-3 transition-all duration-300"
          aria-label={`Leia o artigo completo: ${props.title}`}
          itemProp="url"
        >
          <span className="text-yellow-apiki font-semibold text-sm">
            Ler artigo completo
          </span>
          <ArrowRight className="w-4 h-4 text-yellow-apiki transform group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </CardFooter>
    </Card>
  );
};