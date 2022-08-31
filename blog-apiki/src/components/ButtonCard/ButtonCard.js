import styles from "./ButtonCard.module.scss";

function ButtonCard(props) {
  const btnStyle = {
    width: props.width,
    height: props.height,
    color: props.color,
  };
  return (
    <button onClick={props.onClickBtn} style={btnStyle} className={styles.btn}>
      {props.text}
    </button>
  );
}

export default ButtonCard;
