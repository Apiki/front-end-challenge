import { Author } from "@/components/Author";
import { ShareButtons } from "@/components/ShareButtons";

import {
  Header,
} from './style';

export function PostHeader() {
  return (
    <Header>
      <h2 className='title'>As vantagens do editor Gutenberg para Wordpress</h2>
      <p className='subtitle'>Lorem ipsum, dolor amet consectetur adipisicing elit. Quaerat ratione doloribus dignissimos, animi officiis nemo tempore atque iusto beatae expedita quae corporis a adipisci nesciunt unde dicta quia!</p>

      <div className="wrapper">
        <Author 
          href= "https://lucianakyoko.com"
          image= "https://github.com/lucianakyoko.png"
          name= "Luciana Kyoko"
        />
    
        <div className='date'>
          <span>4 de Agosto de 2022</span>
          <span>|</span>
          <span>Dá pra ler em <span className='minutes'>5</span> minutinhos</span>
        </div>
      </div>

      <ShareButtons />
    </Header>
  );
}