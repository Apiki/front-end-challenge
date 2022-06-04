import "./button.styles.scss";

const Button = ({ span, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {span}
    </button>
  );
};

export default Button;
