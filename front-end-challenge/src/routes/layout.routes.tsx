import { Outlet } from "react-router-dom";

import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import { footerSections } from "../utils/data/footer";

function Layout() {
  return (
    <main className="bg-dark text-slate-50">
      <Header />
      <section className="w-full md:w-[85%] mx-auto mb-12 px-4">
        <Outlet />
      </section>
      <Footer
        logo="/assets/profile.jpg"
        sections={footerSections}
        socialLinks={[]}
        className="mt-auto"
      />
    </main>
  );
}

export default Layout;
