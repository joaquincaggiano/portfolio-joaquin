"use client";

import { useTranslations } from "next-intl";
import ProjectCard from "@/components/cards/project-card";
import { Accordion, AccordionItem } from "@nextui-org/react";

const ProjectsPage = () => {
  const t = useTranslations();

  const projects = [
    {
      image: "/img/biteplanner.png",
      title: "Bite plan",
      description: t("Projects.bitePlanner"),
      amITheOwner: false,
      link: "https://apps.apple.com/ar/app/bite-plan-men%C3%BA-semanal/id6478165544",
      buttonTitle: t("common.download"),
    },
    {
      image: "/img/pokedex.jpeg",
      title: "Pokedex",
      description: t("Projects.pokedex"),
      amITheOwner: true,
      link: "https://vimeo.com/848735080/9670285a19",
      buttonTitle: "Video",
    },
    {
      image: "/img/movies.jpeg",
      title: "MoviesDB",
      description: t("Projects.moviesDB"),
      amITheOwner: true,
      link: "https://vimeo.com/843042349/da7b3ca74a",
      buttonTitle: "Video",
    },
    {
      image: "/icons/3dcube.png",
      title: "Work Hub",
      description: t("Projects.workhub"),
      amITheOwner: false,
      link: "https://play.google.com/store/apps/details?id=es.desaway.managerooms&hl=es",
      buttonTitle: "Descarga",
    },
    // {
    //   image: "/img/calculadora.jpeg",
    //   title: "Calculadora",
    //   description: t("Projects.calculator"),
    //   amITheOwner: true,
    //   link: "https://vimeo.com/832443587/5a0b559911",
    //   buttonTitle: "Video",
    // },
  ];

  const privateProjects = [
    {
      title: t("Projects.labelPlatformTitle"),
      description: t("Projects.labelPlatformDescription"),
    },
    {
      title: t("Projects.stopXenofobiaTitle"),
      description: t("Projects.stopXenofobiaDescription"),
    },
    {
      title: t("Projects.ujiPrideTitle"),
      description: t("Projects.ujiPrideDescription"),
    },
    {
      title: t("Projects.rogerRestaurantTitle"),
      description: t("Projects.rogerRestaurantDescription"),
    },
    {
      title: t("Projects.rekTitle"),
      description: t("Projects.rekDescription"),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </div>

      <div className="flex flex-col gap-10">
        <h2 className="text-base font-normal">* {t("Projects.subtitle")}</h2>

        <Accordion>
          {privateProjects.map((project) => {
            return (
              <AccordionItem
                key={project.title}
                aria-label={project.title}
                title={project.title}
                className="font-semibold text-xl"
              >
                <div className="flex flex-col text-base font-normal mb-5">
                  {project.description}
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default ProjectsPage;
