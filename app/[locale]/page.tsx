"use client";

import { useLocale, useTranslations } from "next-intl";
import Vsc from "@/components/home/vsc";
import CardSkill from "@/components/cards/card-skill";
import { pallete } from "@/styles/pallete";

import EyeSvg from "@/components/icons/eye-svg";
import ReactSvg from "@/components/icons/react-svg";
import FirebaseSvg from "@/components/icons/firebase-svg";
import JsSvg from "@/components/icons/js-svg";
import TsSvg from "@/components/icons/ts-svg";
import PrismaSvg from "@/components/icons/prisma-svg";
import NodeSvg from "@/components/icons/node-svg";
import NextSvg from "@/components/icons/next-svg";
import PostgresSvg from "@/components/icons/postgres-svg";

const Home = () => {
  const t = useTranslations();
  const localActive = useLocale();

  const skills = [
    {
      name: "Javascript",
      icon: <JsSvg />,
      description: t("Skills.js"),
    },
    {
      name: "Next.js",
      icon: <NextSvg />,
      description: t("Skills.next"),
    },
    {
      name: "React / Native",
      icon: <ReactSvg width="80" height="80" />,
      description: t("Skills.react"),
    },
    {
      name: "Firebase",
      icon: <FirebaseSvg />,
      description: t("Skills.firebase"),
    },
    {
      name: "Typescript",
      icon: <TsSvg />,
      description: t("Skills.ts"),
    },
    {
      name: "Node.js",
      icon: <NodeSvg />,
      description: t("Skills.node"),
    },
    {
      name: "Prisma",
      icon: <PrismaSvg />,
      description: t("Skills.prisma"),
    },
    {
      name: "Postgres",
      icon: <PostgresSvg />,
      description: t("Skills.postgres"),
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row gap-16 mb-20">
        {/* Presentación */}
        <div className="flex flex-col w-full lg:max-w-[40%] xl:max-w-[600px] animate-slide-in-left">
          {/* Saludo */}
          <div className="w-full max-w-[300px] self-center md:max-w-[400px] lg:max-w-[100%]">
            <h1 className="text-2xl md:text-3xl xl:text-4xl mb-5 text-center lg:text-start">
              {t("Home.welcome")}{" "}
              <span style={{ color: pallete.blueLight }}>Joaquín</span>, Frontend
              Developer 👨🏼‍💻
            </h1>
          </div>

          {/* Breve texto de cómo soy */}
          <div className="text-lg lg:text-xl xl:text-2xl text-center w-full max-w-[500px] self-center md:max-w-[600px] lg:max-w-[100%] lg:text-start">
            {t("Home.presentation")}
          </div>

          {/* Boton ver CV */}
          <a
            href={localActive === "es" ? "/pdf/j-caggiano-cv-esp.pdf" : "/pdf/j-caggiano-cv-eng.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-fit text-center py-3 px-4 mt-5 border-2 border-blue-light hover:bg-gradient-to-r from-blue-dark to-blue-light rounded-xl hover:border-black"
          >
            {t("Home.viewCV")}

            <EyeSvg />
            {/* <Image
              src={EyeLogo}
              width={20}
              height={20}
              className="mb-[1.5px] ml-1"
              alt="eye logo"
            /> */}
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
