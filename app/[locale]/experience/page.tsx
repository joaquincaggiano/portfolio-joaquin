import CardExperiencie from "@/components/cards/card-experiencie";
import { useTranslations } from "next-intl";

const ExperiencePage = () => {
  const t = useTranslations();
  return (
    <div>
      <div className="flex flex-col gap-10 sm:flex-row justify-center items-center">
        <CardExperiencie data="5" title={t("Experience.coursesTaken")} />
        <CardExperiencie data="+12" title={t("Experience.projectsDone")} />
        <CardExperiencie data="18" title={t("Experience.monthsOfExperience")} />
      </div>
    </div>
  );
};

export default ExperiencePage;
