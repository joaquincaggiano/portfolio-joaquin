"use client";

import styles from "./project-card.module.css";
import AppButton from "../buttons/AppButton";
import { useTranslations } from "next-intl";
import { useRef } from "react";

interface Props {
  project: {
    image: string;
    title: string;
    description: string;
    amITheOwner: boolean;
    link: string;
    buttonTitle: string;
  };
}

const ProjectCard = ({ project }: Props) => {
  const { image, title, description, amITheOwner, link, buttonTitle } = project;

  const t = useTranslations();

  const linkRef = useRef<HTMLAnchorElement>(null);

  const redirectToExternalPage = () => {
    // Simular clic en el enlace al hacer clic en el botón
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <div
      className={`${styles.card} relative w-full max-w-[250px] h-[300px] sm:max-w-[240px] sm:h-[320px] md:max-w-[270px] md:h-[360px] xl:max-w-[300px] xl:h-[380px]`}
    >
      <div
        className={styles.front}
        style={{
          background: `url(${image}) top no-repeat`,
          backgroundSize: "cover",
        }}
      />
      <div
        className={`${styles.back} flex flex-col justify-between bg-gradient-to-r from-blue-dark to-black`}
      >
        <section className="flex flex-col">
          <h2 className="text-xl md:text-2xl mb-4 font-semibold">{title}</h2>
          <p className="text-sm font-normal">{description}</p>
        </section>

        <section className="flex justify-between items-center">
          <span className="text-xs font-normal">{!amITheOwner && t("common.desaway")}</span>

          <AppButton
            className="border-blue-light hover:bg-gradient-to-r from-blue-dark to-blue-light font-medium"
            variant="bordered"
            onPress={redirectToExternalPage}
          >
            <a ref={linkRef} href={link} target="_blank">
              {buttonTitle}
            </a>
          </AppButton>
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;
