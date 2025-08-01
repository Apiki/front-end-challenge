const stripCaptionWidth = function (html: string) {
  return html.replace(
    /<div([^>]*?)style="[^"]*?width:\s*\d+px;?([^"]*)"([^>]*)>/g,
    `<div$1$3>`,
  );
};

export default stripCaptionWidth;
