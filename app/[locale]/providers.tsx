"use client";

// import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    // <SessionProvider basePath="/api/next-auth">
    <NextUIProvider className="min-h-screen min-w-screen p-5 flex flex-col">
      <header>
        HEADER
      </header>
      {children}
    </NextUIProvider>
    // </SessionProvider>
  );
};
