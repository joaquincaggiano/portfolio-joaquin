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
import LocaleSwitcher from "../switcher/locale-switcher";
import { pallete } from "@/styles/pallete";

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
    <Navbar 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen} 
      className="bg-transparent" 
    >
      {/* Logo menu */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="hidden md:flex">
          <span className="font-bold text-xl"><span style={{color: pallete.blueLight}}>{"<J"}</span>oaquín <span style={{color: pallete.blueLight}}>{"/>"}</span></span>
        </NavbarBrand>
      </NavbarContent>

      {/* Items menus navigator */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((menu) => {
          return (
            <NavbarItem
              key={menu.title}
              onClick={() => router.push(menu.link)}
              className="cursor-pointer"
              style={{
                color: pathname === menu.link ? pallete.blueLight : "#FFF",
              }}
            >
              
                {menu.title}
            </NavbarItem>
          );
        })}
      </NavbarContent>

      {/* Switcher */}
      <NavbarContent justify="end">
        <NavbarItem>
          <LocaleSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* Items menu hamburguesa */}
      <NavbarMenu className="bg-gradient-to-br from-black to-zinc-700 mt-10">
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
