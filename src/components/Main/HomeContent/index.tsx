import { Breadcrumb } from "../BreadCrumb";
import { CardsSection } from "./CardsSection";
import { SubscribeComponent } from "./Subscribe";

export function MainHomeComponent() {
    return(
        <main className="mx-10 sm:mx-[100px]">
            <Breadcrumb title="Desenvolvimento Wordpress" category="Desenvolvimento Wordpress"/>
            <CardsSection />
            <SubscribeComponent />
        </main>
    )
}