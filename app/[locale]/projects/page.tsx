import {useTranslations} from 'next-intl';

const ProjectsPage = () => {
  const t = useTranslations();
  return (
    <div>
      {/* <h1 className='text-xl'>{t("Home.title")}</h1> */}
      Projects
    </div>
  );
}

export default ProjectsPage;
