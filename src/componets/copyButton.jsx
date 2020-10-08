import React, { useEffect, useState } from 'react';
import copyIcon from '../icons/copy-icon-4797.png';

export default function CopyButton(props) {
  const {data}=props
  return (
    <div className="coping-link-align" >
      <span className="warning-copy"></span>
      <img
        className="copyIcon"
        src={copyIcon}
        alt="Copiar link"
        onClick={() => copyToClipBoard(data)}
      />
    </div>
  );
}

function copyToClipBoard(e) {
  window.navigator.clipboard.writeText(e);
  const warningCopy = document.getElementsByClassName('warning-copy')[0];
  warningCopy.innerHTML = 'Link Copiado!';
  setTimeout(() => (warningCopy.innerHTML = ''), 5000);
}
