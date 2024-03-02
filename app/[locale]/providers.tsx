"use client";

import { NavBarComponent } from "@/components/navigator/navbar-component";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <header className="px-8 sm:px-16 md:px-24 lg:px-16 pt-8">
          <NavBarComponent />
        </header>
        <main className="min-h-screen min-w-screen px-8 pt-10 sm:px-16 md:px-24 lg:px-16 lg:pt-24 flex flex-col">
          {children}
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
};
