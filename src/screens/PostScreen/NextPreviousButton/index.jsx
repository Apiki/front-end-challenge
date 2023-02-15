import NextLink from "next/link";
import { ArrowLeft, ArrowRight } from "phosphor-react";

import {
  Buttons,
} from './style';

export function NextPreviousButton() {
  return(
    <Buttons>
      <NextLink href="/posts/post-anterior" className='button right'>
        <div className='wrapper'>
          <ArrowLeft className="icon" weight="thin" />
          <span>post anterior</span>
        </div>
        <h3 className='title'>Titulo do post anterior</h3>
      </NextLink>

      <NextLink href="/posts/proximo-post" className='button left'>
        <div className='wrapper'>
          <span>próximo post</span>
          <ArrowRight className="icon" weight="thin" />
        </div>
        <h3 className='title'>Titulo do próximo post próximo post próximo post</h3>
      </NextLink>
    </Buttons>
  );
}