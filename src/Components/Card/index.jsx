import { Img } from "../Img";
import { Link } from "../Link";
import { Card_Index, Card_Link } from "./styled";
import parse from "html-react-parser";

export const Card = ({ elemento }) => {
  return (
    <>
      <Card_Index>
        <div>
          <Img card elementos={elemento} click={elemento.slug}></Img>
        </div>
        <div>
          <h1>
            {elemento.title.rendered.length > 50 ? (
              <>{`${parse(elemento.title.rendered.substr(0, 45))}...`}</>
            ) : (
              <>{elemento.title.rendered}</>
            )}
          </h1>
          <p>
            {elemento.yoast_head_json.description.length > 150 ? (
              <>{`${elemento.yoast_head_json.description.substr(0, 150)}...`}</>
            ) : (
              <>{elemento.yoast_head_json.description}</>
            )}
          </p>
        </div>
        <Card_Link>
          <Link post click={elemento.slug}>
            Saiba Mais...
          </Link>
        </Card_Link>
      </Card_Index>
    </>
  );
};
