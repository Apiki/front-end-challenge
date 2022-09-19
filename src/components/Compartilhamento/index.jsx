import React from 'react';
import { PropTypes } from 'prop-types';
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LineIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import style from './index.module.scss';

export default function BarraDeCompartilhamento({
  link, size, round, gap,
}) {
  return (
    <div className={style.container} style={{ gap }}>
      <EmailShareButton url={link}>
        <EmailIcon size={size} round={round} />
      </EmailShareButton>
      <FacebookShareButton url={link}>
        <FacebookIcon size={size} round={round} />
      </FacebookShareButton>
      <LineShareButton url={link}>
        <LineIcon size={size} round={round} />
      </LineShareButton>
      <LinkedinShareButton url={link}>
        <LinkedinIcon size={size} round={round} />
      </LinkedinShareButton>
      <RedditShareButton url={link}>
        <RedditIcon size={size} round={round} />
      </RedditShareButton>
      <TelegramShareButton url={link}>
        <TelegramIcon size={size} round={round} />
      </TelegramShareButton>
      <TwitterShareButton url={link}>
        <TwitterIcon size={size} round={round} />
      </TwitterShareButton>
      <WhatsappShareButton url={link}>
        <WhatsappIcon size={size} round={round} />
      </WhatsappShareButton>
    </div>
  );
}

BarraDeCompartilhamento.propTypes = {
  link: PropTypes.string,
  size: PropTypes.number,
  gap: PropTypes.number,
  round: PropTypes.bool,
};
