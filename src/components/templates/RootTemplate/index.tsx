import { memo, type PropsWithChildren } from "react";
import { Outlet } from "react-router";
import { renderElementIfTrue } from "~utils";
import "./styles.scss";

export const RootTemplate = memo(function RootTemplate({ children }: PropsWithChildren) {
    return <section className="root-template">{renderElementIfTrue(children, children, <Outlet />)}</section>;
});
