export default function Heading({ title, subtitle }) {
  return (
    <section className="c-heading">
      <h1
        className="c-heading__title"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <p
        className="c-heading__subtitle"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    </section>
  );
}
