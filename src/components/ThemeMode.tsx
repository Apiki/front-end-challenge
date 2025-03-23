"use client";
import { ChangeEvent, useEffect, useState } from "react";
type ThemeMode = {
  switcher: boolean;
};
export default function ThemeMode({ switcher }: ThemeMode) {
  enum THEME {
    mid_night = "mid_night",
    dark = "dark",
    night = "night",
  }

  const [themeMode, setThemeMode] = useState<THEME>(THEME.mid_night);
  const [showMode, setShowMode] = useState<boolean>(false);
  function handleMode(mode: THEME) {
    document.documentElement.className = "";
    document.documentElement.classList.add(THEME[mode]);
    localStorage.setItem("mode", THEME[mode]);
    setThemeMode(mode);
  }
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
  function handleSwitchModes() {
    let newMode: THEME;
    switch (themeMode) {
      case THEME.night:
        newMode = THEME.mid_night;
        break;
      case THEME.mid_night:
        newMode = THEME.dark;
        break;
      case THEME.dark:
        newMode = THEME.night;
        break;
    }
    handleMode(newMode);
  }
  useEffect(() => {
    const mode: string | null = localStorage.getItem("mode");
    if (mode) setThemeMode(THEME[mode as THEME]);
  }, [THEME]);
  return (
    <div className="relative">
      <label
        onClick={() => switcher && handleSwitchModes()}
        htmlFor="themeModeId"
        className={`text-heading cursor-pointer flex items-center p-3 rounded-full hover:bg-secondary transition-colors shadow-md active:bg-secondary ${
          showMode && "bg-secondary"
        }`}
      >
        {themeMode === THEME.dark ? (
          <i className="DarkIcon animate-fade-down"></i>
        ) : themeMode === THEME.night ? (
          <i className="NightIcon animate-fade-left"></i>
        ) : (
          <i className="MidNightIcon animate-fade-up"></i>
        )}
      </label>
      <input
        hidden
        disabled={switcher}
        onChange={handleCollapseTheme}
        id="themeModeId"
        checked={showMode}
        type="checkbox"
        className="peer"
      />
      <div
        className="bg-secondary invisible peer-checked:visible top-16 translate-x-1/2 right-1/2 min-w-max rounded-lg transition-all duration-300 ease-in-out
                                    peer-checked:max-h-[200px] shadow-md peer-checked:opacity-100 max-h-0 opacity-0 absolute"
      >
        <i className="Arrow2Icon rotate-90 absolute -top-4 right-1/2 translate-x-1/2  bg-secondary"></i>
        <ul className="h-full w-full">
          <li className="">
            <button
              onClick={() => handleMode(THEME.night)}
              className="flex p-3 w-full items-center rounded-t-md hover:bg-tertiary transition-colors justify-start h-full"
            >
              <i className="NightIcon mr-2"></i>
              <span>Noite</span>
            </button>
          </li>
          <li className="">
            <button
              onClick={() => handleMode(THEME.mid_night)}
              className="flex p-3 w-full items-center hover:bg-tertiary transition-colors justify-start h-full"
            >
              <i className="MidNightIcon mr-2"></i>
              <span>Meia-Noite</span>
            </button>
          </li>
          <li className="">
            <button
              onClick={() => handleMode(THEME.dark)}
              className="flex p-3 w-full items-center rounded-b-md hover:bg-tertiary transition-colors justify-start h-full"
            >
              <i className="DarkIcon mr-2"></i>
              <span>Escuro</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
