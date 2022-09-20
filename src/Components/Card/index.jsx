import { Img } from "../Img";
import { Link } from "../Link";
import { Card_Index } from "./styled";

export const Card = ({ elemento }) => {
  return (
    <>
      <Card_Index>
        <div>
          <Img card elementos={elemento}></Img>
        </div>
        <h1>{elemento.title.rendered}</h1>
        <Link post>postagem</Link>
      </Card_Index>
    </>
  );
};
