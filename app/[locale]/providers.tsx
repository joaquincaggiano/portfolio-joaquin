"use client";

import { NavBarComponent } from "@/components/navigator/navbar-component";
import { NextUIProvider } from "@nextui-org/react";

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <NextUIProvider>
      <header>
        <NavBarComponent />
      </header>
      <main className="min-h-screen min-w-screen p-5 flex flex-col">
        {children}
      </main>
    </NextUIProvider>
  );
};
