import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <main>
      <h1 className='text-xl'>{t("Home.title")}</h1>
    </main>
  );
}
