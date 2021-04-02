import { domToReact, attributesToProps } from 'html-react-parser';

const options = {
  replace: (domNode) => {
    // if (!domNode.attribs) {
    //   return;
    // }

    if (domNode.name === 'p') {
      return (
        <p className="details-p">
          {domToReact(domNode.children, options)}
        </p>
      );
    }

    if (domNode.name === 'h2') {
      return (
        <h2 className="details-subtitle">
          {domToReact(domNode.children, options)}
        </h2>
      );
    }

    if (domNode.name === 'a') {
      const props = attributesToProps(domNode.attribs);
      return (
        <a className="details-link" {...props}>
          {domToReact(domNode.children, options)}
        </a>
      );
    }

    if (domNode.name === 'blockquote') {
      return (
        <blockquote className="details-blockquote">
          {domToReact(domNode.children, options)}
        </blockquote>
      );
    }
    
    if (domNode.name === 'table') {
      return (
        <table className="details-table">
          {domToReact(domNode.children, options)}
        </table>
      );
    }
    
    if (domNode.name === 'pre') {
      return (
        <pre className="details-pre">
          {domToReact(domNode.children, options)}
        </pre>
      );
    }

  }
};

export default options;
