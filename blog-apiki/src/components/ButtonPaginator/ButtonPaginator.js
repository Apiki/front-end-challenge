import styles from "./ButtonPaginator.module.scss";

function ButtonPaginator(props) {
  return (
    <div className={styles.paginatorContainer}>
      <button
        onClick={props.onClickPrev}
        className={styles.btn}
        style={{ marginRight: "5px" }}
      >
        Anterior
      </button>
      <p className={styles.paginatorTexts}>
        - {props.page} de {props.pages} -
      </p>
      <button
        onClick={props.onClickNext}
        className={styles.btn}
        style={{ marginLeft: "5px" }}
      >
        Próxima
      </button>
    </div>
  );
}

export default ButtonPaginator;
