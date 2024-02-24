"use client";

import { NavBarComponent } from "@/components/navigator/NavBarComponent";
// import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    // <SessionProvider basePath="/api/next-auth">
    <NextUIProvider>
      <header>
        <NavBarComponent />
      </header>
      <main className="min-h-screen min-w-screen p-5 flex flex-col">
        {children}
      </main>
    </NextUIProvider>
    // </SessionProvider>
  );
};
