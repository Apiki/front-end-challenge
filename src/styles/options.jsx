import { domToReact, attributesToProps } from 'html-react-parser';

const options = {
  replace: (domNode) => {
    if (domNode.attribs) {
      console.log('att', domNode);
      if (domNode.attribs.class === 'wp-block-coblocks-click-to-tweet__text') {
        return (
          <p className='details-p-tweet'>
            {domToReact(domNode.children, options)}
          </p>
        );
      }
      if (domNode.attribs.class === 'gform_not_found') {
        return (
          <p className='details-p-notfound'>
            {domToReact(domNode.children, options)}
          </p>
        );
      }
      if (domNode.attribs.class === 'wp-block-code') {
        return (
          <pre className='details-pre-block'>
            {domToReact(domNode.children, options)}
          </pre>
        );
      }
      if (domNode.attribs.class === 'wp-block-preformatted') {
        return (
          <pre className='details-pre-preformatted'>
            {domToReact(domNode.children, options)}
          </pre>
        );
      }
      if (domNode.attribs.class === 'tw-data-text tw-ta tw-text-small') {
        return (
          <pre className='details-pre-small'>
            {domToReact(domNode.children, options)}
          </pre>
        );
      }
      if (domNode.attribs.class === 'highlight') {
        return (
          <pre className='details-pre-highlight'>
            {domToReact(domNode.children, options)}
          </pre>
        );
      }
      if (domNode.attribs.class === 'wp-block-table is-style-stripes' || domNode.attribs.class === 'wp-block-table is-style-regular') {
        return (
          <figure className='details-figure-blocktable'>
            {domToReact(domNode.children, options)}
          </figure>
        );
      }
      if (domNode.attribs.class === 'wp-block-image') {
        return (
          <figure className='details-figure-blockimage'>
            {domToReact(domNode.children, options)}
          </figure>
        );
      }
      if (domNode.attribs.class === 'wp-block-image size-large' || domNode.attribs.class === 'wp-block-image floated__img') {
        return (
          <figure className='details-figure-blockimage-large'>
            {domToReact(domNode.children, options)}
          </figure>
        );
      }
      if (domNode.attribs.class === 'aligncenter size-large is-resized' || domNode.attribs.class === 'aligncenter size-large') {
        return (
          <figure className='details-figure-aligncenter-large'>
            {domToReact(domNode.children, options)}
          </figure>
        );
      }
      if (domNode.attribs.class === 'wp-caption aligncenter' || domNode.attribs.class === 'aligncenter') {
        return (
          <figure className='details-figure-aligncenter'>
            {domToReact(domNode.children, options)}
          </figure>
        );
      }
      if (domNode.attribs.class === 'wp-caption alignright' || domNode.attribs.class === 'wp-caption alignleft' || domNode.attribs.class === 'wp-caption alignnone') {
        return (
          <figure className='details-figure-align'>
            {domToReact(domNode.children, options)}
          </figure>
        );
      }
      if (domNode.attribs.class === 'wp-caption-text') {
        return (
          <figcaption className='details-figcaption-text'>
            {domToReact(domNode.children, options)}
          </figcaption>
        );
      }
      if (!domNode.attribs.class && domNode.name === 'iframe') {
        const props = attributesToProps(domNode.attribs);
        props.className = 'details-default-iframe';
        return (
          <iframe title={props.title} {...props}>
            {domToReact(domNode.children, options)}
          </iframe>
        );
      }
      if (!domNode.attribs.class && domNode.name === 'a') {
        const props = attributesToProps(domNode.attribs);
        return (
          <a className='details-default-a' {...props}>
            {domToReact(domNode.children, options)}
          </a>
        );
      }
      if (domNode.attribs.class === 'tm-ctt-btn') {
        const props = attributesToProps(domNode.attribs);
        props.className = 'details-link-tm-ctt-btn';
        console.log('link', props);
        return (<a {...props}>
          {domToReact(domNode.children, options)}
        </a>);
      }
      if (domNode.attribs.class === 'external text') {
        const props = attributesToProps(domNode.attribs);
        props.className = 'details-link-externaltext';
        return (
          <a {...props}>
            {domToReact(domNode.children, options)}
          </a>
        );
      }
      if (domNode.attribs.class === 'image') {
        const props = attributesToProps(domNode.attribs);
        props.className = 'details-link-image';
        return (
          <a {...props}>
            {domToReact(domNode.children, options)}
          </a>
        );
      }
      if (domNode.attribs.class === 'mw-redirect') {
        const props = attributesToProps(domNode.attribs);
        props.className = 'details-link-redirect';
        return (
          <a {...props}>
            {domToReact(domNode.children, options)}
          </a>
        );
      }
      if (domNode.attribs.class === 'wp-block-coblocks-click-to-tweet__twitter-btn') {
        const props = attributesToProps(domNode.attribs);
        props.className = 'details-link-twitter-btn';
        return (
          <a {...props}>
            {domToReact(domNode.children, options)}
          </a>
        );
      }
      if (domNode.attribs.class === 'wp-block-coblocks-click-to-tweet' || domNode.attribs.class === 'wp-block-quote wp-block-coblocks-click-to-tweet') {
        return (
          <blockquote className='details-blockquote'>
            {domToReact(domNode.children, options)}
          </blockquote>
        );
      }
      if (domNode.attribs.class === 'wp-video-shortcode') {
        return (
          <video className='details-video'>
            {domToReact(domNode.children, options)}
          </video>
        );
      }
      if (domNode.attribs.class === 'wikitable' || domNode.attribs.class === 'widefat' || domNode.attribs.class === 'has-fixed-layout') {
        return (
          <table className='details-table'>
            {domToReact(domNode.children, options)}
          </table>
        );
      }
      if (domNode.attribs.class === 'notranslate') {
        return (
          <span className='details-span-notranslate'>
            {domToReact(domNode.children, options)}
          </span>
        );
      }
      if (domNode.attribs.class === 'arg-type' || domNode.attribs.class === 'arg-name' || domNode.attribs.class === 'arg-default') {
        return (
          <span className='details-span-arg'>
            {domToReact(domNode.children, options)}
          </span>
        );
      }
      if (domNode.attribs.class === 'nt' || domNode.attribs.class === 'na' || domNode.attribs.class === 's') {
        return (
          <span className='details-span-ntnas'>
            {domToReact(domNode.children, options)}
          </span>
        );
      }
      if (domNode.attribs.class === 'goog-text-highlight') {
        return (
          <span className='details-span-goog-text-highlight'>
            {domToReact(domNode.children, options)}
          </span>
        );
      }
      if (domNode.attribs.class === 'mw-headline') {
        return (
          <span className='details-span-headline'>
            {domToReact(domNode.children, options)}
          </span>
        );
      }
    }
    if (domNode.name) {
      if (domNode.name === 'code') {
        console.log('code');
        return (
          <code className='details-default-code'>
            {domToReact(domNode.children, options)}
          </code>
        );
      }
      if (domNode.name === 'p') {
        console.log('outer here');
        return (
          <p className='details-default-p'>
            {domToReact(domNode.children, options)}
          </p>
        );
      }
      if (domNode.name === 'table') {
        return (
          <table className='details-default-table'>
            {domToReact(domNode.children, options)}
          </table>
        );
      }
      if (domNode.name === 'ol') {
        return (
          <ol className='details-default-ol'>
            {domToReact(domNode.children, options)}
          </ol>
        );
      }
      if (domNode.name === 'ul') {
        return (
          <ul className='details-default-ul'>
            {domToReact(domNode.children, options)}
          </ul>
        );
      }
      if (domNode.name === 'li') {
        return (
          <li className='details-default-li'>
            {domToReact(domNode.children, options)}
          </li>
        );
      }
      if (domNode.name === 'i') {
        return (
          <i className='details-default-i'>
            {domToReact(domNode.children, options)}
          </i>
        );
      }
      if (domNode.name === 'b') {
        return (
          <b className='details-default-b'>
            {domToReact(domNode.children, options)}
          </b>
        );
      }
      if (domNode.name === 'strong') {
        return (
          <strong className='details-default-strong'>
            {domToReact(domNode.children, options)}
          </strong>
        );
      }
      if (domNode.name === 'em') {
        return (
          <em className='details-default-em'>
            {domToReact(domNode.children, options)}
          </em>
        );
      }
      if (domNode.name === 'h2') {
        return (
          <h2 className='details-default-h2'>
            {domToReact(domNode.children, options)}
          </h2>
        );
      }
      if (domNode.name === 'h3') {
        return (
          <h3 className='details-default-h3'>
            {domToReact(domNode.children, options)}
          </h3>
        );
      }
      if (domNode.name === 'h4') {
        return (
          <h4 className='details-default-h4'>
            {domToReact(domNode.children, options)}
          </h4>
        );
      }
      if (domNode.name === 'pre') {
        return (
          <pre className='details-default-pre'>
            {domToReact(domNode.children, options)}
          </pre>
        );
      }
      if (domNode.name === 'code') {
        return (
          <code className='details-default-code'>
            {domToReact(domNode.children, options)}
          </code>
        );
      }
      if (domNode.name === 'blockquote') {
        return (
          <blockquote className='details-default-blockquote'>
            {domToReact(domNode.children, options)}
          </blockquote>
        );
      }
      if (domNode.name === 'div') {
        return (
          <div className='details-default-div'>
            {domToReact(domNode.children, options)}
          </div>
        );
      }
    }
  }
}
export default options;
