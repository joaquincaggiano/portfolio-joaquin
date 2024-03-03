"use client";

import { useLocale, useTranslations } from "next-intl";
import Vsc from "@/components/home/vsc";
import CardSkill from "@/components/cards/card-skill";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { pallete } from "@/styles/pallete";

import EyeLogo from "@/public/icons/eye.svg";
import ReactLogo from "@/public/icons/react.svg";
import FirebaseLogo from "@/public/icons/firebase.svg";
import JSLogo from "@/public/icons/js.svg";
import TSLogo from "@/public/icons/ts.svg";
import PrismaLogo from "@/public/icons/prisma.svg";
import NodeLogo from "@/public/icons/node.svg";
import NextLogo from "@/public/icons/next.svg";
import PostgresLogo from "@/public/icons/postgres.svg";

const Home = () => {
  const t = useTranslations();

  const skills = [
    {
      name: "Javascript",
      icon: JSLogo,
      description: t("Skills.js")
    },
    {
      name: "Next.js",
      icon: NextLogo,
      description: t("Skills.next")
    },
    {
      name: "React / Native",
      icon: ReactLogo,
      description: t("Skills.react")
    },
    {
      name: "Firebase",
      icon: FirebaseLogo,
      description: t("Skills.firebase")
    },
    {
      name: "Typescript",
      icon: TSLogo,
      description: t("Skills.ts")
    },
    {
      name: "Node.js",
      icon: NodeLogo,
      description: t("Skills.node")
    },
    {
      name: "Prisma",
      icon: PrismaLogo,
      description: t("Skills.prisma")
    },
    {
      name: "Postgres",
      icon: PostgresLogo,
      description: t("Skills.postgres"),
    },
  ];
  // const localActive = useLocale();

  const openPDF = () => {
    console.log("mostrar pdf");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Presentación */}
        <div className="flex flex-col w-full lg:max-w-[50%]">
          {/* Saludo */}
          <div className="w-full max-w-[300px] self-center md:max-w-[400px] lg:max-w-[100%]">
            <h1 className="text-2xl md:text-3xl xl:text-4xl mb-5 text-center lg:text-start">
              {t("Home.welcome")}{" "}
              <span style={{ color: pallete.blueLight }}>Joaquín</span> Frontend
              Developer 👨🏼‍💻
            </h1>
          </div>

          {/* Breve texto de cómo soy */}
          <div className="text-lg lg:text-xl xl:text-2xl text-center w-full max-w-[500px] self-center md:max-w-[600px] lg:max-w-[100%] lg:text-start">
            {t("Home.presentation")}
          </div>

          {/* Boton ver CV */}
          <Button
            variant="bordered"
            className="w-full max-w-[120px] mt-5 border-blue-light hover:bg-gradient-to-r from-blue-dark to-blue-light"
            onClick={openPDF}
          >
            {t("Home.viewCV")}

            <Image
              src={EyeLogo}
              width={20}
              height={20}
              className="mb-[1.5px] ml-1"
              alt="eye logo"
            />
          </Button>
        </div>

        {/* Datos personales - VSC */}
        <Vsc />
      </div>

      {/* Skills */}
      <h2 className="text-center text-2xl md:text-3xl mb-7">{t("Skills.title")}</h2>

      <div className="columns-2 mb-10 sm:w-full sm:max-w-[500px] sm:self-center sm:flex sm:flex-wrap sm:justify-between sm:items-center sm:gap-5">
        {skills.map((skill) => {
          return (
            <CardSkill key={skill.name} name={skill.name} icon={skill.icon} description={skill.description} />
          );
        })}
      </div>
    </>
  );
};
export default Home;
