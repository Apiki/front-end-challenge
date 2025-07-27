interface ContentProps {
  content: string | undefined;
}

export function Content({ content }: ContentProps) {
  return (
    <>
      {content ? (
        <div
          className="
              prose-dark prose-default max-w-none
              prose-headings:font-semibold
              prose-img:rounded-lg
              prose-a:text-blue-600 hover:prose-a:underline
              prose-ul:ml-6 prose-ul:list-disc
            "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <span className="text-gray-500">Nenhum conteúdo disponível</span>
      )}
    </>
  );
}
