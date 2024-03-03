import { useTranslations } from "next-intl";
import ProjectCard from "@/components/cards/project-card";

const ProjectsPage = () => {
  const t = useTranslations();

  const projects = [
    {
      image: "/img/biteplanner.png",
      title: "Bite plan: Menu semanal",
      description: t("Projects.bitePlanner"),
      amITheOwner: false,
      link: "",
      buttonTitle: t("common.download"),
    },
    {
      image: "/img/stopXenofobia.png",
      title: "Stop Xenofobia",
      description: t("Projects.stopXenofobia"),
      amITheOwner: false,
      link: "",
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
      image: "/img/calculadora.jpeg",
      title: "Calculadora",
      description: t("Projects.calculator"),
      amITheOwner: true,
      link: "https://vimeo.com/832443587/5a0b559911",
      buttonTitle: "Video",
    },
    // {
    //   image: "/img/restaurante.jpeg",
    //   title: "Roger Restaurantes",
    //   description: t("Projects.rogerRestaurant"),
    //   amITheOwner: false,
    //   link: "",
    //   buttonTitle: "Video",
    // },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-8 justify-center items-center mb-10">
        {projects.map(project => {
          return <ProjectCard project={project} />
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
