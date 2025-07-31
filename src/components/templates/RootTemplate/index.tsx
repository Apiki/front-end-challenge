import { memo, type PropsWithChildren } from "react";
import { Outlet } from "react-router";
import { renderElementIfTrue } from "~utils";
import "./styles.scss";

export const RootTemplate = memo(function RootTemplate({ children }: PropsWithChildren) {
    return (
        <section className="root-template">
            <header>header</header>
            <main>{renderElementIfTrue(children, children, <Outlet />)}</main>
            <footer>footer</footer>
            <button>scroll to top</button>
        </section>
    );
});
