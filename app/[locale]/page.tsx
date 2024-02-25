"use client";

import { pallete } from "@/styles/pallete";
import { useLocale, useTranslations } from "next-intl";
import EyeLogo from "@/public/icons/eye.svg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Vsc from "@/components/home/vsc";

const Home = () => {
  const t = useTranslations("Home");
  // const localActive = useLocale();

  const openPDF = () => {
    console.log("mostrar pdf")
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Presentación */}
        <div className="flex flex-col w-full lg:max-w-[50%]">
          {/* Saludo */}
          <div className="w-full max-w-[300px] self-center md:max-w-[400px] lg:max-w-[100%]">
            <h1 className="text-2xl md:text-3xl xl:text-4xl mb-5 text-center lg:text-start">
              {t("welcome")}{" "}
              <span style={{ color: pallete.blueLight }}>Joaquín</span> Frontend
              Developer 👨🏼‍💻
            </h1>
          </div>

          {/* Breve texto de cómo soy */}
          <div className="text-lg lg:text-xl xl:text-2xl text-center w-full max-w-[500px] self-center md:max-w-[600px] lg:max-w-[100%] lg:text-start">
            {t("presentation")}
          </div>

          {/* Boton ver CV */}
          <Button
            variant="bordered"
            className="border-2 w-full max-w-[120px] mt-5"
            style={{ borderColor: pallete.blueLight }}
            onClick={openPDF}
          >
            {t("viewCV")}

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
      <h2 className="text-center text-2xl md:text-3xl mb-10">{t("skills")}</h2>
    </>
  );
};
export default Home;
