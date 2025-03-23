import { ChangeEvent, useState } from "react";

export default function CategoryMenu() {
  const [showMode, setShowMode] = useState<boolean>(false);

  function handleCollapseTheme(e: ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();

    if (!showMode) {
      setShowMode(true);
      document.body.addEventListener("click", handleUnCollapseTheme);
    } else {
      handleUnCollapseTheme();
    }
  }

  function handleUnCollapseTheme() {
    setShowMode(false);
    document.body.removeEventListener("click", handleUnCollapseTheme);
  }

  return (
    <div className="relative">
      <label
        htmlFor="CategoryModeId"
        className={`text-heading cursor-pointer flex items-center p-3 rounded-full hover:bg-secondary transition-colors shadow-md active:bg-secondary ${
          showMode && "bg-secondary"
        }`}
      >
        <i className="CategoryIcon animate-fade-up"></i>
      </label>
      <input
        hidden
        onChange={handleCollapseTheme}
        id="CategoryModeId"
        checked={showMode}
        type="checkbox"
        className="peer"
      />
      <div
        className="bg-secondary  invisible peer-checked:visible shadow-lg top-16 right-1/2 translate-x-1/2 min-w-max rounded-lg transition-all duration-300 ease-in-out
                                    peer-checked:max-h-[1200px] peer-checked:opacity-100 max-h-0 opacity-0 absolute"
      >
        <i className="Arrow2Icon rotate-90 absolute -top-4 right-1/2 translate-x-1/2  bg-secondary"></i>
        <ul className="space-y-1 text-sm">
          <li>
            <a
              className="p-3 hover:bg-tertiary rounded-t-md transition-colors flex items-center"
              target="_blank"
              href="https://blog.apiki.com/desenvolvimento/"
            >
              <span>
                <i className="CodeIcon block text-red-500 text-body size-6"></i>
              </span>
              <span className="ml-2  text-body">Desenvolvimento WordPress</span>
            </a>
          </li>
          <li>
            <a
              className="p-3 hover:bg-tertiary transition-colors flex items-center"
              target="_blank"
              href="https://blog.apiki.com/e-commerce/"
            >
              <span>
                <i className="ShopIcon block text-fuchsia-500 text-body size-6"></i>
              </span>
              <span className="ml-2  text-body">E-commerce</span>
            </a>
          </li>
          <li>
            <a
              className="p-3 hover:bg-tertiary transition-colors flex items-center"
              target="_blank"
              href="https://blog.apiki.com/infra/"
            >
              <span>
                <i className="DBIcon block text-sky-500 text-body size-6"></i>
              </span>
              <span className="ml-2  text-body">Infra para WordPress</span>
            </a>
          </li>
          <li>
            <a
              className="p-3 hover:bg-tertiary transition-colors flex items-center"
              target="_blank"
              href="https://blog.apiki.com/institucional/"
            >
              <span>
                <i className="LogoIcon block bg-yellow-500 text-body size-6"></i>
              </span>
              <span className="ml-2  text-body">Institucional</span>
            </a>
          </li>
          <li>
            <a
              className="p-3 hover:bg-tertiary transition-colors flex items-center"
              target="_blank"
              href="https://blog.apiki.com/seguranca/"
            >
              <span>
                <i className="ShieldIcon block bg-orange-500 text-body size-6"></i>
              </span>
              <span className="ml-2  text-body">Segurança para WordPress</span>
            </a>
          </li>
          <li>
            <a
              className="p-3 hover:bg-tertiary transition-colors flex items-center"
              target="_blank"
              href="https://blog.apiki.com/mobile/"
            >
              <span>
                <i className="PhoneIcon bg-green-500 text-body size-6"></i>
              </span>
              <span className="ml-2  text-body">WordPress Mobile</span>
            </a>
          </li>
          <li>
            <a
              className="p-3 hover:bg-tertiary transition-colors flex items-center"
              target="_blank"
              href="https://blog.apiki.com/performance/"
            >
              <span>
                <i className="LighteningIcon bg-amber-500 text-body size-6"></i>
              </span>
              <span className="ml-2  text-body">WordPress Performance</span>
            </a>
          </li>
          <li>
            <a
              className="p-3 hover:bg-tertiary  rounded-b-md transition-colors flex items-center"
              target="_blank"
              href="https://blog.apiki.com/seo/"
            >
              <span>
                <i className="SEOIcon block bg-violet-500 text-body size-6"></i>
              </span>
              <span className="ml-2  text-body">WordPress SEO</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
