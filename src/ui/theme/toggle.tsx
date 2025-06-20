"use client";

import { type PropsWithChildren, useContext } from "react";
import { SunIcon } from "@phosphor-icons/react/dist/ssr/Sun";
import { MoonStarsIcon } from "@phosphor-icons/react/dist/ssr/MoonStars";
import { SpinnerIcon } from "@phosphor-icons/react/dist/ssr/Spinner";
import { ThemeContext } from ".";
import clsx from "clsx";

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={clsx(
        "rounded-full border-gray-300 dark:border-d-gray-300 border w-[46px] h-[46px]",
        "relative hover:scale-105 transition-all ease-in cursor-default outline-none ring-0",
        "dark:ring-white/15 ring-black/15 focus-within:ring-4",
      )}
    >
      {theme === "dark" ? (
        <IconWrapper>
          <MoonStarsIcon size={24} weight="bold" />
        </IconWrapper>
      ) : theme === "light" ? (
        <IconWrapper>
          <SunIcon size={24} weight="bold" />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <SpinnerIcon size={24} weight="bold" className="animate-spin" />
        </IconWrapper>
      )}
    </button>
  );
}

function IconWrapper({ children }: PropsWithChildren) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  );
}
