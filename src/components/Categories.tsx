export default function Categories() {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center mx-auto">
      <li>
        <a
          className="flex flex-col items-center space-y-3 hover:bg-secondary py-8 px-4 rounded-md transition-colors"
          href="https://blog.apiki.com/desenvolvimento/"
        >
          <span className="size-16 lg:size-[4.5rem] xl:size-20 shadow-lg shadow-red-500/40 bg-red-500 rounded-full inline-flex justify-center items-center">
            <i className="CodeIcon size-9 lg:size-10 xl:size-12"></i>
          </span>
          <span className=" text-sm lg:text-base">
            Desenvolvimento WordPress
          </span>
        </a>
      </li>
      <li>
        <a
          className="flex flex-col items-center space-y-3 hover:bg-secondary  py-8 px-4 rounded-md transition-colors"
          target="_blank"
          href="https://blog.apiki.com/e-commerce/"
        >
          <span className="size-16 lg:size-[4.5rem] xl:size-20 shadow-lg shadow-fuchsia-500/40 bg-fuchsia-500 rounded-full inline-flex justify-center items-center">
            <i className="ShopIcon size-9 lg:size-10 xl:size-12"></i>
          </span>
          <span className=" text-sm lg:text-base">E-commerce</span>
        </a>
      </li>
      <li className="">
        <a
          className="flex flex-col items-center space-y-3 hover:bg-secondary  py-8 px-4 rounded-lg transition-colors"
          target="_blank"
          href="https://blog.apiki.com/infra/"
        >
          <span className="size-16 lg:size-[4.5rem] xl:size-20 shadow-lg shadow-sky-500/40 bg-sky-500 rounded-full inline-flex justify-center items-center">
            <i className="DBIcon size-9 lg:size-10 xl:size-12"></i>
          </span>
          <span className=" text-sm lg:text-base">Infra para WordPress</span>
        </a>
      </li>
      <li className="">
        <a
          className="flex flex-col items-center space-y-3 hover:bg-secondary  py-8 px-4 rounded-lg transition-colors"
          target="_blank"
          href="https://blog.apiki.com/institucional/"
        >
          <span className="size-16 lg:size-[4.5rem] xl:size-20 shadow-lg shadow-yellow-500/40 bg-yellow-500 rounded-full inline-flex justify-center items-center">
            <i className="LogoIcon size-9 lg:size-10 xl:size-12"></i>
          </span>
          <span className=" text-sm lg:text-base">Institucional</span>
        </a>
      </li>
      <li className="">
        <a
          className="flex flex-col items-center space-y-3 hover:bg-secondary  py-8 px-4 rounded-lg transition-colors"
          target="_blank"
          href="https://blog.apiki.com/seguranca/"
        >
          <span className="size-16 lg:size-[4.5rem] xl:size-20 shadow-lg shadow-orange-500/40 bg-orange-500 rounded-full inline-flex justify-center items-center">
            <i className="ShieldIcon size-9 lg:size-10 xl:size-12"></i>
          </span>
          <span className=" text-sm lg:text-base">
            Segurança para WordPress
          </span>
        </a>
      </li>
      <li className="">
        <a
          className="flex flex-col items-center space-y-3 hover:bg-secondary  py-8 px-4 rounded-lg transition-colors"
          target="_blank"
          href="https://blog.apiki.com/mobile/"
        >
          <span className="size-16 lg:size-[4.5rem] xl:size-20 shadow-lg shadow-green-500/40 bg-green-500 rounded-full inline-flex justify-center items-center">
            <i className="PhoneIcon size-9 lg:size-10 xl:size-12"></i>
          </span>
          <span className=" text-sm lg:text-base">WordPress Mobile</span>
        </a>
      </li>
      <li className="">
        <a
          className="flex flex-col items-center space-y-3 hover:bg-secondary  py-8 px-4 rounded-lg transition-colors"
          target="_blank"
          href="https://blog.apiki.com/performance/"
        >
          <span className="size-16 lg:size-[4.5rem] xl:size-20 shadow-lg shadow-amber-500/40 bg-amber-500 rounded-full inline-flex justify-center items-center">
            <i className="LighteningIcon size-9 lg:size-10 xl:size-12"></i>
          </span>
          <span className=" text-sm lg:text-base">WordPress Performance</span>
        </a>
      </li>
      <li className="">
        <a
          className="flex flex-col items-center space-y-3 hover:bg-secondary  py-8 px-4 rounded-lg transition-colors"
          target="_blank"
          href="https://blog.apiki.com/seo/"
        >
          <span className="size-16 lg:size-[4.5rem] xl:size-20 shadow-lg shadow-violet-500/40 bg-violet-600 rounded-full inline-flex justify-center items-center">
            <i className="SEOIcon size-9 lg:size-10 xl:size-12"></i>
          </span>
          <span className=" text-sm lg:text-base">WordPress SEO</span>
        </a>
      </li>
    </ul>
  );
}
