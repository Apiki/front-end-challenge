import { memo, type PropsWithChildren } from "react";
import { Outlet } from "react-router";
import { Footer, Header } from "~components/atoms";
import { renderElementIfTrue } from "~utils";
import "./styles.scss";

export const RootTemplate = memo(function RootTemplate({ children }: PropsWithChildren) {
    return (
        <section className="root-template">
            <Header />
            <main className="root-template__box">{renderElementIfTrue(children, children, <Outlet />)}</main>
            <Footer />
            <button>scroll to top</button>
        </section>
    );
});
