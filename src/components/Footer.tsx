import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary to-primary">
      <div className=" xl:w-4/6 mx-auto">
        <ul className="py-12 px-6 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4 gap-y-14">
          <li className="col-span-2 sm:col-span-3 lg:col-span-1">
            <ul>
              <li>
                <Image
                  className="h-9 md:h-10 lg:h-11"
                  src="logo/logo-title.svg"
                  alt="Apiki blogs logo"
                  width={144}
                  height={36}
                />
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-lg">Nossos Serviços</span>
            <ul className=" space-y-1.5 mt-4">
              <li>
                <a
                  className="text-body hover:text-heading"
                  href="https://apiki.com/hospedagem-wordpress-wp-host/"
                >
                  Hospedagem
                </a>
              </li>
              <li>
                <a
                  className="text-body hover:text-heading"
                  href="https://apiki.com/desenvolvimento-wordpress-wp-care/"
                >
                  Desenvolvimento
                </a>
              </li>
              <li>
                <a
                  className="text-body hover:text-heading"
                  href="https://apiki.com/suporte-wordpress-wp-care/"
                >
                  Suporte
                </a>
              </li>
              <li>
                <a
                  className="text-body hover:text-heading"
                  href="https://apiki.com/layout-wordpress-wp-care/"
                >
                  UX/UI
                </a>
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-lg">Conteúdo</span>
            <ul className=" space-y-1.5 mt-4">
              <li>
                <a
                  className="text-body hover:text-heading"
                  href="https://apiki.com/hospedagem-wordpress-wp-host/"
                >
                  Materiais Gratuitos
                </a>
              </li>
              <li>
                <a
                  className="text-body hover:text-heading"
                  href="https://apiki.com/desenvolvimento-wordpress-wp-care/"
                >
                  Web – Hooks
                </a>
              </li>
              <li>
                <a
                  className="text-body hover:text-heading"
                  href="https://apiki.com/suporte-wordpress-wp-care/"
                >
                  Templates
                </a>
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-lg">Social media</span>
            <ul className=" space-y-1.5 mt-4">
              <li>
                <a
                  className="flex hover:bg-tertiary w-min py-1 px-2 rounded-md transition-colors items-center"
                  href="https://www.instagram.com/apikiwordpress/"
                >
                  <span className=" size-10 mr-2 inline-flex rounded-full bg-tertiary justify-center items-center">
                    <i className="InstagramIcon size-6"></i>
                  </span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  className="flex hover:bg-tertiary w-min py-1 px-2 rounded-md transition-colors items-center"
                  href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA"
                >
                  <span className=" size-10 mr-2 inline-flex rounded-full bg-tertiary justify-center items-center">
                    <i className="YoutubeIcon size-6"></i>
                  </span>
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a
                  className="flex hover:bg-tertiary w-min py-1 px-2 rounded-md transition-colors items-center"
                  href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA"
                >
                  <span className=" size-10 mr-2 inline-flex rounded-full bg-tertiary justify-center items-center">
                    <i className="LinkedinIcon size-5"></i>
                  </span>
                  <span>Linkedin</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <span className="bg-placeholder opacity-40 block h-px"></span>
        <div className="py-2">
          <span className="text-center block">
            Acesse{" "}
            <a
              href="https://apiki.com/"
              target="_blank"
              className="text-accent-light underline underline-offset-2"
            >
              apiki.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
