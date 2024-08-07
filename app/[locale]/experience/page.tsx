import CardAnalyticExperiencie from "@/components/cards/card-analytic-experiencie";
import CardDataExperience from "@/components/cards/card-data-experience";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CoderLogo from "@public/img/coder.jpeg";

const ExperiencePage = () => {
  const t = useTranslations();

  const experience = [
    {
      date: t("Experience.coderDate"),
      url: "https://www.coderhouse.com/es/",
      image: <Image src={CoderLogo} width={120} height={80} alt="coderhouse" />,
      title: "Coder House",
      description: t("Experience.coderDescription"),
      role: t("Experience.coderRole"),
    },
    {
      date: t("Experience.desawayDate"),
      url: "https://desaway.es/",
      image: <Image src={CoderLogo} width={120} height={80} alt="desaway" />,
      title: "Desaway",
      description: t("Experience.desawayDescription"),
      role: t("Experience.desawayRole"),
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-10 sm:flex-row justify-center items-center mb-20">
        <CardAnalyticExperiencie
          data="5"
          title={t("Experience.coursesTaken")}
        />
        <CardAnalyticExperiencie
          data="+12"
          title={t("Experience.projectsDone")}
        />
        <CardAnalyticExperiencie
          data="18"
          title={t("Experience.monthsOfExperience")}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-10">
        {experience.map((experience) => {
          return (
            <CardDataExperience
              key={experience.title}
              date={experience.date}
              url={experience.url}
              image={experience.image}
              title={experience.title}
              description={experience.description}
              role={experience.role}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExperiencePage;
