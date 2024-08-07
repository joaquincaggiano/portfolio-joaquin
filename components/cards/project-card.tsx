"use client";

import styles from "./project-card.module.css";
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

  return (
    <div className={`${styles.card} relative w-[300px] h-[380px]`}>
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
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold">
            {title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-normal">
            {description}
          </p>
        </section>

        <section className="flex justify-between items-center">
          <span className="text-xs font-normal">
            {!amITheOwner && t("common.desaway")}
          </span>

          <a
            className={`w-fit text-center py-2 px-6 border-2 border-blue-light hover:bg-gradient-to-r from-blue-dark to-blue-light rounded-xl hover:border-black`}
            ref={linkRef}
            href={link}
            target="_blank"
          >
            {buttonTitle}
          </a>
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;
