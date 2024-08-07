"use client";

import { useTranslations } from "next-intl";
import Vsc from "@/components/home/vsc";
import CardSkill from "@/components/cards/card-skill";
import Image from "next/image";
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
      description: t("Skills.js"),
    },
    {
      name: "Next.js",
      icon: NextLogo,
      description: t("Skills.next"),
    },
    {
      name: "React / Native",
      icon: ReactLogo,
      description: t("Skills.react"),
    },
    {
      name: "Firebase",
      icon: FirebaseLogo,
      description: t("Skills.firebase"),
    },
    {
      name: "Typescript",
      icon: TSLogo,
      description: t("Skills.ts"),
    },
    {
      name: "Node.js",
      icon: NodeLogo,
      description: t("Skills.node"),
    },
    {
      name: "Prisma",
      icon: PrismaLogo,
      description: t("Skills.prisma"),
    },
    {
      name: "Postgres",
      icon: PostgresLogo,
      description: t("Skills.postgres"),
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-16 mb-20">
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
          <a
            href="/pdf/j-caggiano-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-fit text-center py-3 px-4 mt-5 border-2 border-blue-light hover:bg-gradient-to-r from-blue-dark to-blue-light rounded-xl hover:border-black"
          >
            {t("Home.viewCV")}

            <Image
              src={EyeLogo}
              width={20}
              height={20}
              className="mb-[1.5px] ml-1"
              alt="eye logo"
            />
          </a>
        </div>

        {/* Datos personales - VSC */}
        <Vsc />
      </div>

      {/* Skills */}
      <h2 className="text-center text-2xl md:text-3xl mb-7">
        {t("Skills.title")}
      </h2>

      <div className="flex justify-center items-center">
        <div className="w-full lg:max-w-[70%] grid grid-cols-2 sm:grid-cols-4 gap-5">
          {skills.map((skill) => {
            return (
              <CardSkill
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                description={skill.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
