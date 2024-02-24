"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

export const NavBarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  const router = useRouter();
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  const menuItems = [
    { title: t("Header.home"), link: "/" },
    { title: t("Header.projects"), link: "/projects" },
    { title: t("Header.experience"), link: "/experience" },
    { title: t("Header.contact"), link: "/contact" },
  ];

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        {/* <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand> */}
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((menu) => {
          return (
            <NavbarItem
              key={menu.title}
              onClick={() => router.push(menu.link)}
              className="cursor-pointer"
            >
              <div
                className={`${
                  pathname === menu.link ? "text-blue-500" : "text-black"
                }`}
              >
                {menu.title}
              </div>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">Cambiar idioma</NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((menu, index) => (
          <NavbarMenuItem
            key={`${menu.title}-${index}`}
            onClick={() => {
              setIsMenuOpen(false);
              router.push(menu.link);
            }}
            className="cursor-pointer"
          >
            <div>{menu.title}</div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
