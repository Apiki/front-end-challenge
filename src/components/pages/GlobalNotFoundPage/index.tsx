import svg from "~assets/svg/page-404.svg";
import { NotFoundPage } from "~components/atoms";

export const GlobalNotFoundPage = () => (
    <NotFoundPage
        src={svg}
        title="Opa! Você parece ter se perdido no meio do caminho."
        description="Essa URL não existe ou foi descontinuada. Mas tudo bem! Te levamos de volta ao início."
    />
);
