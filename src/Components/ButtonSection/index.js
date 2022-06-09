import "./buttonSection.scss";

const ButtonSection = ({
  isBackDisabled,
  isNextDisabled,
  handleBackPage,
  handleNextPage,
}) => {
  return (
    <section className="buttons">
      <button
        className="buttons__back--button"
        disabled={isBackDisabled}
        onClick={() => {
          handleBackPage();
        }}
      >
        Anterior
      </button>
      <button
        className="buttons__next--button"
        disabled={isNextDisabled}
        onClick={() => {
          handleNextPage();
        }}
      >
        Próximo
      </button>
    </section>
  );
};

export default ButtonSection;
