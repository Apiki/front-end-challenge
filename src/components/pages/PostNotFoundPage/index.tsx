import svg from "~assets/svg/post-404.svg";
import { NotFoundPage } from "~components/atoms";

export const PostNotFoundPage = () => (
    <NotFoundPage
        src={svg}
        title="Opa! Isso aqui parece terra de ninguém..."
        description="A URL que você tentou acessar não existe ou foi movida. Talvez você esteja procurando outro post?"
    />
);
